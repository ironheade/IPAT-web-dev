# -*- coding: utf-8 -*-
"""
Created on Fri Jun 10 08:50:48 2022

@author: bendzuck
"""

import os
import sqlite3


read_query = '''SELECT * FROM test_table'''
write_query = "INSERT INTO test_table (Teilnehmer, Institut, Vorerfahrung) VALUES ('Darth Vader','Imperium',5)"

def do_query(query):
    db = sqlite3.connect(os.path.abspath("test_db.db"))
    cursor = db.cursor()
    cursor.execute(query)
    
    db.commit()
    db.close()

do_query(write_query)
