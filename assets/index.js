var peer = new Peer('peer1');
var conn

$(function() {

    peer_id_target = 'peer2'

    peer.on('open', function(id) {
        console.log('Meu ID de peer é: ' + id);
    });

    // Tentativa de conexão com o Peer 2
    console.log(`Tentando conexão com: ${peer_id_target}`)
    setTimeout(() => {
        conn = peer.connect(peer_id_target);        

        conn.on('open', function() {
            console.log('Conectado ao peer: ' + conn.peer);
            conn.send('Olá do Windows!');
        });
    
        conn.on('close', function() {
            console.log('Conexão fechada');
        });
          
        conn.on('error', function(err) {
            console.error('Erro na conexão:', err);
        });
    
        peer.on('connection', function(conn) {
            conn.on('data', function(data) {
                console.log('Mensagem recebida: ' + data);
            });
        });
    }, 3e3);

    


});
