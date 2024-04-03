from flask import Flask, flash, jsonify, redirect
from flask_cors import CORS
from flask import Flask
from flask import jsonify
from flask import request
import os
import json

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, select
from config import db, app, bcrypt, login_manager
from flask_login import login_user, logout_user, login_required
from models import Streak, User


#user authentication 
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route("/login", methods=["GET", "POST"])
def login():
    user_name = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(username=user_name).first()
    if user and bcrypt.check_password_hash(user.password, password):
        login_user(user, remember=True)
        
        return user.to_json()
    else:
        return {}



@app.route("/logout")
def logout():
    logout_user()
    return "logged out"
   
    #then redirct to home page 

# @app.route("/account")
# @login_required
# def account():
#     print("you are now logged in")

# @app.route("/token", methods=["POST", "GET"])
# def create_token():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     if email != "test" or password != "test":
#         return jsonify({"msg": "Bad username or password"}), 401

#     access_token = create_access_token(identity=email)
#     return jsonify(access_token=access_token)


@app.route('/users', methods=["GET"])
def get_all_users():
    #users = User.query.first()
    #users1 = db.session.query(User)
    #users = db.session.execute(select(User).order_by(User.id))
    users = db.session.query(User).all()
    #streaks = db.session.query(Streak).all()
    #print(users.all())
    list = []
    for u in users:
        row = u.to_json()
        list.append(row)
    print(list)
    return jsonify(list)
   



@app.route("/register", methods=["POST"])
def register():
    email = request.json.get("email")
    username = request.json.get("username")
    password = request.json.get("password")
    streaks = []
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(email=email, username=username, password=hashed_password, streaks=streaks)

    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    #jsonify({"message": "User created!" }),201
    
    flash('Your acount has been created! You are now able to log in', 'success')
    return jsonify({
        "id": new_user.id,
        "email": email
})



@app.route("/update_user/<int:user_id>", methods=["POST"])
def update_user(user_id):
    #user = User.query.get(user_id)

    # if not user:
    #     return jsonify({"message": "User not found"}), 404
    
    #data = request.json
    # user.email = data.get("email", user.email)
    # user.username = data.get("username", user.username)
    # user.streaks = data.get("streaks", streaks)
    #user.streaks = user.streaks.array_append(data["streaks"])
    date = request.json.get("date")
    userId = request.json.get("userId")

    new_streak = Streak(date=date,user_id=userId)
    #user.password = data.get("password", user.password)
    try:
        db.session.add(new_streak)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    
    return jsonify({"message": "user updated"}), 200


@app.route('/streaks', methods=["GET", "POST"])
def get_user_streaks():
    user_id = request.json.get("userId", None)
    #users = User.query.first()
    #users1 = db.session.query(User)
    #users = db.session.execute(select(User).order_by(User.id))
    #users = db.session.query(User).all()
    streaks = Streak.query.filter_by(user_id=user_id).all()
    print(streaks)
    #streaks = db.session.query(Streak).all()
    #print(users.all())
    list = []
    for u in streaks:
        row = u.to_json()
        list.append(row)
    print(list)
    return jsonify(list)


@app.route("/api/users", methods=["GET"])
def users():
    return jsonify(
        {
            "users": [
                "ibrahim", 
                "luka",
                "bron"
            ]
        }
    )

if __name__ == "__main__":
    #app = create_app()
    with app.app_context():
        app.secret_key = 'super secret key'

        db.create_all()
        #db.drop_all()
    app.run(debug=True, port=8000)






#create flask app 
#app = Flask(__name__)

#change this for production 
#cors = CORS(app, origins='*')

# Setup the Flask-JWT-Extended extension
# app.config["JWT_SECRET_KEY"] =   os.environ.get("JWT_SECRET")
# jwt = JWTManager(app)


#session.delete(instance)

# #postgres://ogpwmffi:LMf9Hr-lFZC4bFCWbAy5WVuUia8WWZeb@hansken.db.elephantsql.com/ogpwmffi
# engine = create_engine('postgresql+psycopg2://ogpwmffi:LMf9Hr-lFZC4bFCWbAy5WVuUia8WWZeb@hansken.db.elephantsql.com/ogpwmffi')
# with engine.connect() as connection:
#     metadata = MetaData()
#     tables = Table('tables', metadata,
#     Column('table_schema', String),
#     Column('table_name', String),
#     schema='information_schema')
#     results = connection.execute(tables.select().where(tables.c.table_schema=='pg_catalog'))
#     for result in results:
#         print(result)
# #app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite3://admin:89UYS1GbSJ@nyb21m31sk.sqlite.cloud:8860'
# db = SQLAlchemy(app)
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///admin:89UYS1GbSJ@cqah1m3jik.sqlite.cloud:8860"
# app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# db = SQLAlchemy(app)

#app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///friends.db'
#db = SQLAlchemy(app)




    # app.config['SQLALCHEMY_DATABASE_URI']= "sqlite3:admin:89UYS1GbSJ@nyb21m31sk.sqlite.cloud:8860"
    # app.config['SECRET_KEY']='thisisasecretkey'
    #engine = create_engine("postgresql+psycopg2://ogpwmffi:LMf9Hr-lFZC4bFCWbAy5WVuUia8WWZeb@hansken.db.elephantsql.com/ogpwmffi")
    #app.config['SQLALCHEMY_DATABASE_URI']= 'postgresql+psycopg2://ogpwmffi:LMf9Hr-lFZC4bFCWbAy5WVuUia8WWZeb@hansken.db.elephantsql.com/ogpwmffi'
    #db = SQLAlchemy(app)

    #engine = db.create_engine("sqlitecloud://admin:89UYS1GbSJ@nyb21m31sk.sqlite.cloud:8860")
    #conn = engine.connect() 
  


#db = SQLAlchemy(app)



# with app.app_context():
#     db.create_all()

#     db.session.add(User( email='admin@example.com', username='admsdin', password='password'))
#     db.session.add(User( email='admin34@example.com', username='admsdin', password='password'))
#     db.session.add(User( email='new@example.com', username='user1', password='password'))
#     db.session.add(User( email='new009@example.com', username='user2', password='password'))
#    # db.session.add(User('guest', 'guest@example.com'))
#     db.session.commit()

#     users = User.query.all()
#     print(users)

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
