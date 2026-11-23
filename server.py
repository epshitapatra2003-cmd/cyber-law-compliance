#!/usr/bin/env python3
"""
Cyber Law, Risk and Compliance (Paper 1) - Localhost Web Server with User Database
TA2 Assessment Project | National Forensic Sciences University (NFSU)
Class: Semester 5, Forensic Science, Specialization in Cybersecurity
"""

import http.server
import socketserver
import webbrowser
import os
import sys
import threading
import time
import json

DEFAULT_PORT = 8000
HOST = "127.0.0.1"
DB_FILE = "users_database.json"

def get_db_path():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.join(script_dir, DB_FILE)

def load_users():
    path = get_db_path()
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            sys.stderr.write(f"[!] Error loading {DB_FILE}: {e}\n")
    return []

def save_users(users):
    path = get_db_path()
    try:
        with open(path, "w", encoding="utf-8") as f:
            json.dump(users, f, indent=2)
        return True
    except Exception as e:
        sys.stderr.write(f"[!] Error saving {DB_FILE}: {e}\n")
        return False

class CustomHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable caching headers and CORS for smooth local development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/users':
            users = load_users()
            # Sanitize passwords for security in API response
            sanitized = []
            for u in users:
                safe_u = dict(u)
                safe_u['password'] = '••••••••'
                sanitized.append(safe_u)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"success": True, "users": sanitized}).encode('utf-8'))
            return
        super().do_GET()

    def do_POST(self):
        if self.path == '/api/register':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')
            try:
                data = json.loads(body)
            except Exception:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": "Invalid JSON"}).encode('utf-8'))
                return

            email = data.get('email', '').strip().lower()
            name = data.get('name', '').strip()
            password = data.get('password', '').strip()
            roll_no = data.get('rollNo', '').strip() or 'FS-2024-' + str(int(time.time()) % 1000)
            role = data.get('role', 'Student')
            specialization = data.get('specialization', 'Cybersecurity')

            if not email or not password or not name:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": "Missing required fields"}).encode('utf-8'))
                return

            users = load_users()
            for u in users:
                if u.get('email', '').lower() == email:
                    self.send_response(409)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({"success": False, "error": "An account with this email already exists"}).encode('utf-8'))
                    return

            new_user = {
                "id": "USR-" + str(1000 + len(users) + 1),
                "name": name,
                "email": email,
                "rollNo": roll_no,
                "role": role,
                "specialization": specialization,
                "password": password,
                "createdAt": time.strftime("%Y-%m-%dT%H:%M:%S.000Z", time.gmtime()),
                "status": "Active"
            }

            users.append(new_user)
            save_users(users)

            sys.stderr.write(f"[+] New User Registered in Database: {name} ({email}) [{role}]\n")

            self.send_response(201)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            safe_user = dict(new_user)
            safe_user['password'] = '••••••••'
            self.wfile.write(json.dumps({"success": True, "message": "User registered and added to database", "user": safe_user}).encode('utf-8'))
            return

        elif self.path == '/api/login':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')
            try:
                data = json.loads(body)
            except Exception:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": "Invalid JSON"}).encode('utf-8'))
                return

            identifier = data.get('identifier', '').strip().lower()
            password = data.get('password', '').strip()

            users = load_users()
            for u in users:
                if (u.get('email', '').lower() == identifier or u.get('rollNo', '').lower() == identifier) and u.get('password') == password:
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    safe_user = dict(u)
                    safe_user['password'] = '••••••••'
                    self.wfile.write(json.dumps({"success": True, "user": safe_user}).encode('utf-8'))
                    return

            self.send_response(401)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"success": False, "error": "Invalid credentials"}).encode('utf-8'))
            return

        self.send_response(404)
        self.end_headers()

    def log_message(self, format, *args):
        # Clean request logging
        sys.stderr.write("[%s] %s\n" % (self.log_date_time_string(), format % args))

def find_available_port(start_port=DEFAULT_PORT, max_tries=20):
    """Find an available TCP port starting from start_port."""
    import socket
    for port in range(start_port, start_port + max_tries):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind((HOST, port))
                return port
            except OSError:
                continue
    return start_port

def open_browser(url, delay=1.0):
    """Launch the user's default browser after server initializes."""
    time.sleep(delay)
    try:
        webbrowser.open_new_tab(url)
    except Exception as e:
        print(f"[*] Note: Please open your browser and navigate to {url} (Auto-open: {e})")

def main():
    # Ensure current working directory is the app folder
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    # Initialize users database if not present
    if not os.path.exists(get_db_path()):
        save_users([
            {
                "id": "USR-1001",
                "name": "Forensic Student",
                "email": "student@nfsu.ac.in",
                "rollNo": "FS-2024-501",
                "role": "Student",
                "specialization": "Cybersecurity",
                "password": "cyber2026",
                "createdAt": time.strftime("%Y-%m-%dT%H:%M:%S.000Z", time.gmtime()),
                "status": "Active"
            },
            {
                "id": "USR-1002",
                "name": "Dr. V. K. Raman",
                "email": "auditor@nfsu.ac.in",
                "rollNo": "AUD-NFSU-09",
                "role": "Lead Assessor / Faculty",
                "specialization": "Digital Forensics & Cyber Law",
                "password": "audit2026",
                "createdAt": time.strftime("%Y-%m-%dT%H:%M:%S.000Z", time.gmtime()),
                "status": "Active"
            }
        ])

    port = find_available_port(DEFAULT_PORT)
    url = f"http://localhost:{port}"

    banner = f"""
========================================================================
  National Forensic Sciences University (NFSU)
  School of Forensic Science | Specialization in Cybersecurity
  Semester 5 - Cyber Law, Risk and Compliance (Paper 1)
  TA2 Project Web Application [Database Auth Enabled]
========================================================================
  [+] Server running locally at: {url}
  [+] Database File: {get_db_path()}
  [+] Opening web application in your default browser...
  [+] Press Ctrl+C in this terminal window to stop the server.
========================================================================
"""
    print(banner)

    threading.Thread(target=open_browser, args=(url,), daemon=True).start()

    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer((HOST, port), CustomHTTPHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[*] Shutting down local server. Goodbye!")
    except Exception as e:
        print(f"\n[!] Error running server: {e}")

if __name__ == "__main__":
    main()
