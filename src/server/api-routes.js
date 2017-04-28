module.exports = function(app){

	app.get('/api/users/list', function(req, res) {
		res.json({
            success: true,
            message: 'Usuário criado com sucesso.'
        });
	});

}