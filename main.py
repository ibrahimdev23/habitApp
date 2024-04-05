from flask import Flask, flash, jsonify, redirect
from flask_cors import CORS
from flask import Flask
from flask import jsonify
from flask import request


from config import db, app, bcrypt, login_manager
from flask_login import login_user, logout_user, login_required
from models import Streak, User


app.secret_key = 'super secret key'


#user authentication 
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route("/api/login", methods=["GET", "POST"])
def login():
    user_name = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(username=user_name).first()
    if user and bcrypt.check_password_hash(user.password, password):
        login_user(user, remember=True)
        
        return user.to_json()
    else:
        return {}



@app.route("/api/logout")
def logout():
    logout_user()
    return "logged out"
   
  




@app.route('/api/users', methods=["GET"])
def get_all_users():
   
    users = db.session.query(User).all()
   
    list = []
    for u in users:
        row = u.to_json()
        list.append(row)
    print(list)
    return jsonify(list)
   



@app.route("/api/register", methods=["POST"])
def register():
    email = request.json.get("email")
    username = request.json.get("username")
    password = request.json.get("password")
    streaks = []
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(email=email, username=username, password=hashed_password)

    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    
   
    return jsonify({
        "id": new_user.id,
        "email": email
})



@app.route("/api/update_streak", methods=["POST"])
def update_streak():

    date = request.json.get("date")
    userId = request.json.get("userId")

    new_streak = Streak(date=date,user_id=userId)
    try:
        db.session.add(new_streak)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    
    return jsonify({"message": "user updated"}), 200


@app.route('/api/streaks/<int:user_id>', methods=["GET"])
def get_user_streaks(user_id):
    
    #user_id = user_id
    streaks = Streak.query.filter_by(user_id=user_id).all()
    print(streaks)
 
    list = []
    for u in streaks:
        row = u.to_json()
        list.append(row)
    print(list)
    return jsonify(list)



if __name__ == "__main__":
   
    with app.app_context():
        

        db.create_all()
        #db.drop_all()
    app.run(debug=True, port=8000)




