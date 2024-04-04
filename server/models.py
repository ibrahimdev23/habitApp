from flask_login import UserMixin
from sqlalchemy import ARRAY, Integer
from config import db, login_manager

from sqlalchemy_utils import ScalarListType
from sqlalchemy.ext.mutable import Mutable
from sqlalchemy.dialects.postgresql import ARRAY

from MutableListPy import MutableList  

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    

    def __init__(self, email, username, password):
        self.email = email
        self.username = username
        self.password = password
    

    def to_json(self):
        return {
            "id":  self.id,
            "email": self.email,
            "username": self.username,
            "password": self.password,
        }
    

class Streak(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(200))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
   
    def to_json(self):
        return {
            "id":  self.id,
            "date": self.date
        }
    



