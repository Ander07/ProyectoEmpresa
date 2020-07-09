'use strict'

var Employee = require('../model/employee.model');

function saveEmployees(req,res) {
    var employee = new Employee();
    var params  = req.body;

    if(params.name && 
        params.lastname && 
        params.dpi && 
        params.phone && 
        params.place && 
        params.department){

        Employee.findOne({dpi: params.dpi},{department: params.department}, (err, employeeFind)=>{
            if(err){
                res.status(500).send({message: 'Error general'});

            }else if(employeeFind){
                res.send({message: 'Empleado ya registrado.'});
            }else{
                employee.name = params.name;
                employee.lastname = params.lastname;
                employee.dpi = params.dpi;
                employee.phone = params.phone;
                employee.place = params.place;
                employee.department = params.department;

                employee.save((err, empleadoSaved)=>{
                    if(err){
                        res.status(500).send({message: 'Error general'});

                    }else if(empleadoSaved){
                            res.status(200).send({empleado: empleadoSaved});

                        }else{
                            res.status(200).send({message: ' Error al Guardar'});
                        }
                });
            }
        });
    }else{
        res.status(200).send({message: 'Ingrese todos los datos porfavor'});
    }

}

function updateEmployee(req, res){
    var employeeId = req.params.id;
    var update = req.body;

    Employee.findByIdAndUpdate(employeeId, update, {new: true},(err, employeeUpdated)=>{
        if(err){
            res.status(500).send({message: 'Error general.'});
        }else if(employeeUpdated){
            res.send({employee: employeeUpdated});
        }else{
            res.status(418).send({message: 'Error al actualizar.'});
        }
    });
}

function deleteEmployee(req, res){
    var employeeId = req.params.id;

    Employee.findByIdAndRemove(employeeId, (err, employeeDeleted)=>{
        if(err){
            res.status(500).send({message: 'Error general'});
        }else if(employeeDeleted){
            res.send({deleted: employeeDeleted});
        }else{
            res.status(418).send({message: 'Error al eliminar el empleado.'});
        }
    });
}

function listEmployees(req, res){
    Employee.find({}, (err, listEmployees)=>{
        if(err){
            res.status(500).send({message: 'Error general.'});
        }else if(listEmployees){
            res.send({employees: listEmployees});
        }else{
            res.status(418).send({message: 'No se pudo listar'});
        }
    });
}

function findEmployees(req, res){
    const coincidence = req.body.search;
    var id = req.params.id;

    if(id){
    res.status(500).send({message: 'Error general'});
        }else if(coincidence){
            Employee.find({$or:[{'name':{$regex: coincidence,$options:'i'}}, 
                                {'lastname':{$regex: coincidence,$options:'i'}}, 
                                {'place':{$regex: coincidence,$options:'i'}},
                                {'departmen':{$regex: coincidence,$options:'i'}},]}, (err, employeesFind)=>{
            if(err){
                res.status(500).send({message: 'Error general'});
            }else if(employeesFind){
                res.status(200).send({employeesFind: employeesFind});
            }else{
                res.status(200).send({message: 'No hay empleados coincididos'});
            }
        });
        }else{
        res.send({message: 'No se encuentran empleados'})
    }
}

module.exports = {
    saveEmployees,
    updateEmployee,
    deleteEmployee,
    listEmployees,
    findEmployees
}