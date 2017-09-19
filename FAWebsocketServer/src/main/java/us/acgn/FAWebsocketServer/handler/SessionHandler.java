package us.acgn.FAWebsocketServer.handler;

import us.acgn.FAWebsocketServer.server.FAServer;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@ServerEndpoint(
        value="/api/",
        encoders = {SessionHandler.MapEncoder.class})
@SuppressWarnings(value = "unused")
public class SessionHandler {
    private Session session;
    private FAServer server = FAServer.getInstance();

    public Session getSession() {
        return this.session;
    }

    public boolean send(String message) {
        try {
            this.session.getBasicRemote().sendText(message);
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }
    @OnOpen
    public void onWebSocketConnect(Session session)
    {
        this.session = session;
        server.addClient(this);
        Map<String, String> test = new HashMap<String, String>();
            test.put("a","b");
            test.put("cc", "dd");

        try {
            session.getBasicRemote().sendObject(test);
        } catch (IOException | EncodeException e) {
            e.printStackTrace();
        }
    }

    @OnMessage
    public void onWebSocketText(String message)
    {
        System.out.println("Received TEXT message: " + message);
    }

    @OnClose
    public void onWebSocketClose(CloseReason reason)
    {
        System.out.println("Socket Closed: " + reason);
    }

    @OnError
    public void onWebSocketError(Throwable cause)
    {
        cause.printStackTrace(System.err);
    }

    public static class MapEncoder implements Encoder.Text<HashMap> {

        @Override
        public String encode(HashMap object) throws EncodeException {
            return object.toString();
        }

        @Override
        public void init(EndpointConfig config) {

        }

        @Override
        public void destroy() {

        }
    }
}
