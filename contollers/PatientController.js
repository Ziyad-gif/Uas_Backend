const Patient = require("../models/Patient");

class PatientController{
    index(req,res){
        Patient.all((patient)=>{
            if(patient.length >0){
                const data = {
                    message:"menampilkan semua data",
                    data:patient,
                };
                return res.status(200).json(data);
            }
            const data = {
                message:"pasiend tidak ada",
            };
            res.status(200).json(data);

        });

        
    }
    async store(req,res){

        const {idpasien,nama,phone,alamat,status,tanggal_masuk,tanggal_keluar}=req.body;

        if(!idpasient || !nama ||!phone ||!alamat ||!status ||!tanggal_masuk ||!tanggal_keluar){
            const data  = {
                message : "data harus dikirim",
            };
            return res.status(402).json(data);
        }
        const result = await Patient.create(req.body);

        const data = {
            message :"menambahkan data pasient",
            data:result,
        };

        return res.status(201).json(data);
    }

    async update(req,res){
        const {id} = req.params;
        const patient = await Patient.find(id);

        if(patient){
            const patient = await Patient.update(id,req,body);
            const data = {
                message :"mengedit data patient",
                data:patient,
            };
            res.status(200).json(data)
        }else{
            const data ={
                message :"pasien tidak ada",
            }
            res.status(404).json(data);
        }
    }
    async destroy(req,res){
        const {id} = req.params;
        const patient = await Patient.find(id);


        if(patient){
            await Patient.delete(id);
            const data = {
                message :"menghapus data patient",

            };
            res.status(200).json(data);
        }else{
            const data = {
                message: "patient tidak ada",

            };
            res.status(404).json(data);

        }


    }
    async show(req,res){
        const {id} = req.params;
        const patient = await Patient.find(id);


        if(patient){
            const data ={
                message :"menampilkan isi data patient",
                data :patient,
            };
            res.status(200).json(data);
        }
        else{
            const data = {
                message :"data tidak ada",

            };
            res.status(404).json(data);
        }
    }
}

const patientcontroller = new PatientController();

module.exports = patientcontroller;