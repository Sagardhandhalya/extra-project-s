import mysql.connector

mydb = mysql.connector.connect(host="localhost",user="root",password="9081606040",database="Sagar")
mycur = mydb.cursor()
mycur.execute("create table bikepass(id INT NOT NULL AUTO_INCREMENT , user varchar(100) , register_number varchar(20), gender char(8), dob varchar(15), address varchar(50), status varchar(50))")
mycur.execute("create table usertoken(token varchar(25),user varchar(100))")
# mycur.execute("insert into bikepass(id , user , register_number ,gender , dob , address , status) VALUES(1 ,"SAGAR" , "102" ,"male","18-11-1999","ahmedabad , 345678", "pending" )")
# mycur.execute("insert into usertoken(token , user) VALUES("05XDHVD3q3","Sagar")")