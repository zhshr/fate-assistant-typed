package us.acgn.FAWebsocketServer.server;

import us.acgn.FAWebsocketServer.handler.SessionHandler;

import java.net.InetSocketAddress;
import java.util.HashMap;
import java.util.Map;

public class FAServer {
    private static FAServer instance;
    public static FAServer getInstance() {
        if (instance == null) {
            instance = new FAServer();
        }
        return instance;
    }

    private FAServer() {
        clientList = new HashMap<>();
    }

    Map<String, SessionHandler> clientList;

    public void addClient(SessionHandler handler) {
        InetSocketAddress clientIp = (InetSocketAddress) handler.getSession().getUserProperties().get("javax.websocket.endpoint.remoteAddress");
        this.clientList.put(clientIp.toString(), handler);
        System.out.println("New client: " + clientIp.toString());
    }

    public void broadcast(String message) {
        for (SessionHandler handler : clientList.values()) {
            handler.send(message);
        }
    }
}
