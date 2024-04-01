from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy import VARCHAR, Column, MetaData, Table, create_engine

from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin

app = Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI']= 'postgresql+psycopg2://URL'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
# login_manager.login_view = "login"






#engine = create_engine("sqlitecloud://admin:89UYS1GbSJ@cqah1m3jik.sqlite.cloud:8860")


# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///admin:89UYS1GbSJ@cqah1m3jik.sqlite.cloud:8860"
# app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


#db = SQLAlchemy(app)
#db.init_app(app)
# meta=MetaData()
# userstable = Table('users', meta, Column('id', Integer, primary_key = True, autoincrement=True), Column('username', String, unique=True), Column('pwd', String))
# meta.create_all(engine)


# engine = db.create_engine('sqlite:///admin:89UYS1GbSJ@cqah1m3jik.sqlite.cloud:8860')
# engine= create_engine(app.config['SQLALCHEMY_DATABASE_URI'])
# db.init_app(app)
# connection = engine.connect()
# metadata = db.MetaData()
# census = db.Table('census', metadata, autoload=True, autoload_with=engine)

# Print the column names
# print(census.columns.keys())

# ['state', 'sex', 'age', 'pop2000', 'pop2008']

# # Print full table metadata
# print(repr(metadata.tables['census']))

# Table('census', MetaData(bind=None), Column('state', VARCHAR(length=30), table=), Column('sex', VARCHAR(length=1), table=), Column('age', INTEGER(), table=), Column('pop2000', INTEGER(), table=), Column('pop2008', INTEGER(), table=), schema=None)