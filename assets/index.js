$(function(){
  
    var peer = new Peer();
    
    peer.on('open', function(id) {
        console.log('My peer ID is: ' + id);
    });

    var conn = peer.connect('another-peers-id');

    // on open will be launch when you successfully connect to PeerServer
    conn.on('open', function(){
        // here you have conn.id
        conn.send('hi!');
    });


    peer.on('connection', function(conn) {

        conn.on('data', function(data){
          // Will print 'hi!'
          console.log(data);
        });

      });
})