package us.acgn.FAWebsocketServer;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.websocket.jsr356.server.deploy.WebSocketServerContainerInitializer;
import us.acgn.FAWebsocketServer.handler.SessionHandler;

import javax.websocket.server.ServerContainer;

public class ServerEntry {
    public static void main(String[] args) {
        Server server = new Server();
        ServerConnector connector = new ServerConnector(server);
        connector.setPort(3002);
        server.addConnector(connector);

        ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
        context.setContextPath("/");
        server.setHandler(context);

        try
        {
            ServerContainer wscontainer = WebSocketServerContainerInitializer.configureContext(context);

            wscontainer.addEndpoint(SessionHandler.class);

            server.start();
            server.join();
        }
        catch (Throwable t)
        {
            t.printStackTrace(System.err);
        }
    }
}
