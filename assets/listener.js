$(function() {
    
    console.log('Rodando');

    var peer = new Peer('peer2');

    peer.on('open', function(id) {
        console.log('My peer ID is: ' + id);
    });

    peer.on('connection', function(conn) {
        console.log('Conexão recebida de: ' + conn.peer);
        
        // Escutando por dados enviados pela outra parte
        conn.on('data', function(data) {
            console.log(`Mensagem recebida: ${data}`);

            // Enviando resposta de volta
            conn.send('Olá da rasp');
        });

        // Tratando o evento de erro na conexão
        conn.on('error', function(err) {
            console.error('Erro na conexão:', err);
        });
    });

    // Tratando erro na inicialização do Peer
    peer.on('error', function(err) {
        console.error('Erro no Peer:', err);
    });
});
