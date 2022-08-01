const { connect } = require("../routes/agenda");

const controller={};

controller.list=(req,res)=>{
    req.getConnection((err,connection)=>{
        connection.query('SELECT * FROM CONTACTO', (err, rows)=>{
            if (err){
                res.send('Error');
            }else{
                console.log(rows);
                res.render('agendas',{
                    data: rows
                })
            }            
        })
    })
};

controller.register=(req,res)=>{
    res.render('registro');
}

controller.save=(req,res)=>{
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO CONTACTO set ?', data, (err, rows) => {
        if (err){
            res.send('Error');
        }else{
           console.log(rows)
           res.redirect('/');
        }
      })
    })
};

controller.edit=(req,res)=>{
    const id=req.params.id;
    req.getConnection((err,connection)=>{
        connection.query('SELECT * FROM CONTACTO WHERE id= ?', [id], (error,rows)=>{
            console.log(rows[0]);
            res.render('actualizar',{
                data: rows[0]
            })
        })
    })

  };

  controller.update=(req,res)=>{
    const id=req.params.id;
    const newContact=req.body;
    req.getConnection((err,connection)=>{
       connection.query('UPDATE CONTACTO SET ? WHERE id = ?', [newContact,id], (err,rows) =>{
        if (err){
            res.send('Error');
        }else{
           console.log(rows)
           res.redirect('/');
        }
       })
    });
  }


controller.delete=(req,res)=>{
    const id=req.params.id;
    req.getConnection((err,connection)=>{
        connection.query('DELETE FROM CONTACTO WHERE id=?', id, (err,rows)=>{
            if (err){
                res.send('Error');
            }else{
               console.log(rows)
               res.redirect('/');
            }
        })
        
    })  
};

controller.info=(req,res)=>{
    const id=req.params.id;
    req.getConnection((err,connection)=>{
        connection.query('SELECT * FROM CONTACTO WHERE id= ?', [id], (error,rows)=>{
            console.log(rows[0]);
            res.render('info',{
                data: rows[0]
            })
        })
    })
};

controller.return=(req,res)=>{
    res.redirect('/');
}

module.exports=controller;