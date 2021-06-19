from http.server import BaseHTTPRequestHandler, HTTPServer
import string 
import random
import logging
import json
import mysql.connector


class S(BaseHTTPRequestHandler):

    def do_GET(self):
        
        if self.path == '/applications?status=pending':
            mydb = mysql.connector.connect(host="localhost",user="root",password="9081606040",database="Sagar")
            mycur = mydb.cursor()
            content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
            post_data = self.rfile.read(content_length)# <--- Gets the data itself
            my_data= json.loads(post_data)
            token = my_data['token']
            mycur.execute("SELECT * FROM usertoken")
            myresult = mycur.fetchall()
            for x in myresult:
                if(x[0] == token):
                    email = x[1]
            mycur.execute("select * from bikepass")
            applications = mycur.fetchall()
            res = [];
            for x in applications:
                if(x[1] == email and x[6] == 'pending'):
                    res.append(x);
            print(res)
            self.send_response(201)
            self.send_header('Content-type', 'text/html')            
            self.end_headers()
            p1=str(res).encode('utf-8')
            self.wfile.write(p1)

            
        elif self.path == '/applications?status=approved':
            mydb = mysql.connector.connect(host="localhost",user="root",password="9081606040",database="Sagar")
            mycur = mydb.cursor()
            content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
            post_data = self.rfile.read(content_length)# <--- Gets the data itself
            my_data= json.loads(post_data)
            token = my_data['token']
            mycur.execute("SELECT * FROM usertoken")
            myresult = mycur.fetchall()
            for x in myresult:
                if(x[0] == token):
                    email = x[1]
            mycur.execute("select * from bikepass")
            applications = mycur.fetchall()
            output = [];
            for x in applications:
                if(x[1] == email and x[6] == 'approved'):
                    output.append(x);
            print(res)
            self.send_response(201)
            self.send_header('Content-type', 'text/html')            
            self.end_headers()
            p1=str(res).encode('utf-8')
            self.wfile.write(p1)



    def do_POST(self):
        if self.path == '/signin':
            content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
            post_data = self.rfile.read(content_length)# <--- Gets the data itself
            my_data= json.loads(post_data)
            username = my_data['username']
            password = my_data['password']
            print(username)
            print(password)
            
            if validateUser(username , password):
                self.send_response(200)
                self.send_header('Content-type', 'application/json') 
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Access-Control-Allow-Methods', 'POST')           
                self.end_headers()
                exits = False
                mycur.execute("SELECT * FROM usertoken")
                myresult = mycur.fetchall()
                for x in myresult:
                    if x[1] == username:
                        token = [0]
                        exits=True
                        break
                if exits == False:
                    token =''.join(random.choices(string.ascii_uppercase + string.digits, k = 10))

                mydb = connection()
                mycur = mydb.cursor()
                sql = "insert into usertoken(token ,user) values(%s,%s)"
                val = (token , username)
                mycur.execute(sql , val)
                p1 =str({'token' : token}).encode('utf-8')
                self.wfile.write(p1)
            else:
                self.send_response(401)
                self.send_header('WWW-Authenticate', 'Basic realm="localhost"')
                self.send_header('Content-type', 'application/json')            
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Access-Control-Allow-Methods', 'POST AJAX')           
                self.end_headers()
                p2 =str({'isAuthenticated' : False}).encode('utf-8')
                self.wfile.write(p2)

        elif  self.path == '/signup':
            content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
            post_data = self.rfile.read(content_length)# <--- Gets the data itself
            my_data= json.loads(post_data)
            username = my_data['username']
            password = my_data['password']

            if addUser(username , password):
                self.send_response(201)
                self.send_header('Content-type', 'text/html')            
                self.end_headers()
                p3 ="User added successfully ....:) -- !".encode('utf-8')
                self.wfile.write(p3)
            else:
                self.send_response(440)
                self.send_header('Content-type', 'text/html')            
                self.end_headers()
                p4 ="Opration Failed !!!".encode('utf-8')
                self.wfile.write(p4)

        elif self.path == '/submit':
            content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
            post_data = self.rfile.read(content_length)# <--- Gets the data itself
            my_data= json.loads(post_data)
            addBikeApplication(my_data['token'],my_data['registretion_number'] , my_data['gendar'],my_data['dob'] , my_data['address'] )
            self.send_response(201)
            self.send_header('Content-type', 'text/html')            
            self.end_headers()
            p5 ="Application added successful ..!".encode('utf-8')
            self.wfile.write(p5)

    
def connection():
    mydb = mysql.connector.connect(host="localhost",user="root",password="9081606040",database="Sagar")
    return mydb

def create_user_table_script():
    mydb = connection()
    mycur = mydb.cursor()
    mycur.execute('CREATE TABLE users(username VARCHAR(255) PRIMARY KEY,password VARCHAR(50))')
    mycur.execute("INSERT INTO users(username , password)  VALUES('dhandhalya.sagar@earce.com' , 'Searce@123')")
    mydb.commit()
    print(mycur.rowcount, "record inserted.")
    mycur.execute("SELECT * FROM users")
    myresult = mycur.fetchall()
    for x in myresult:
        print(x)


def addUser(username , password):
    mydb = connection()
    mycur = mydb.cursor()
    sql = "INSERT INTO users(username , password)  VALUES(%s , %s)"
    val = (username , password)
    mycur.execute(sql , val)
    mydb.commit()
    print(mycur.rowcount)
    return True

def addBikeApplication( token , regnum, gender , dob , address ):
    mydb = connection()
    mycur = mydb.cursor()
    mycur.execute("SELECT * FROM usertoken")
    myresult = mycur.fetchall()
    for x in myresult:
        if(x[0] == token):
            email = x[1]

    sql = "INSERT INTO bikepass(id , user , register_number ,gender , dob , address , status)  VALUES(%d,%s,%s , %s , %s,%s ,%s)"
    val = (id , email , regnum , gender , dob , address, "pending")
    mycur.execute(sql , val)
    mydb.commit()
    print(mycur.rowcount)
    


def validateUser(username , password):
    mydb = connection()
    mycur = mydb.cursor()
    mycur.execute("SELECT * FROM users")
    myresult = mycur.fetchall()
    for x in myresult:
        if x[0] == username and x[1]==password:
            return True

    return False


def run(server_class=HTTPServer, handler_class=S, port=8000):
    logging.basicConfig(level=logging.INFO)
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    logging.info('Starting httpd...\n')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    logging.info('Stopping httpd...\n')

if __name__ == '__main__':
    from sys import argv

    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()



