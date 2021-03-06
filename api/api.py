import time
from flask import Flask, request
import sqlite3
import pandas as pd
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def landing_page():
    return """<h1>IPAT-app</h1>"""

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/Datenbank',methods=['POST'])
def get_table():
    Dateiname = request.get_json()["tabelle"]

    db = sqlite3.connect(os.path.abspath("test_db.db"))
    read_order = ('''SELECT * FROM {Dateiname}''')
    read_order = read_order.format(Dateiname=Dateiname)
    df = pd.read_sql_query(read_order, db)
        
    tabelle = df.to_json(orient='records')
    db.commit()
    db.close()
            
    return {'tabelle':tabelle}

@app.route('/Datenbank_write',methods=['POST'])
def write_table():
    Teilnehmer = request.get_json()["Teilnehmer"]
    Institut = request.get_json()["Institut"]
    Vorerfahrung = request.get_json()["Vorerfahrung"]
    
    db = sqlite3.connect(os.path.abspath("test_db.db"))
    cursor = db.cursor()
    query = (f"INSERT INTO test_table (Teilnehmer, Institut, Vorerfahrung) VALUES ('{Teilnehmer}','{Institut}',{Vorerfahrung})")
    #query = ("INSERT INTO test_table (Teilnehmer, Institut, Vorerfahrung) VALUES ('Arag','Orog',4)")

    cursor.execute(query)
    print (query)
    
    db.commit()
    db.close()
    
    return "bla"