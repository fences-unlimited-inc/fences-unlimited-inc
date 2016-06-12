#!/usr/bin/python
import ftplib
import os

def put_file(file_name, session):
    with open(file_name,'rb') as file:
        session.storlines("STOR fencesunlimitedinc.com/.well-known/acme-challenge/" + file_name, file)

def create_file():
    code_first = raw_input('Enter first full validation code: ')
    file_name = code.split('.')[0]
    with open(file_name, 'w+') as file:
        file.write(code)
    return file_name



password = raw_input('Enter FTP password: ')
session = ftplib.FTP('web1323.ixwebhosting.com', 'lightswitch05', password)
file_one = create_file()
put_file(file_one, session)
file_two = create_file()
put_file(file_two, session)

session.quit()
os.remove(file_one)
os.remove(file_two)


