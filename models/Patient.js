const db = require('../config/database');

class Patient{
    static all(callback){
        const query = `SELECT * FROM patients`;
        db.query(query,(err,results)=>{
            callback(results);
        });
    }

    static async create(data){
        const id = await new Promise((resolve,reject)=>{
            const query = 'INSERT INTO patients SET ?';
            db.query(query,data,(err,results)=>{
                if(err)reject(err);
                resolve(results.insertId);

            });
        });
        return new Promise((resolve,reject)=>{
            const query =`select * from patients where id = ?`;
            db.query(query,id,(err,results)=>{
                if(err) reject(err);
            });
        });
    }
}

module.exports = Patient;