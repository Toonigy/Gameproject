import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class RPGGamePrototype extends JFrame {
    private int playerX = 50;
    private int playerY = 50;

    public RPGGamePrototype() {
        setTitle("RPG Game Prototype");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setResizable(false);

        addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                playerX = e.getX();
                playerY = e.getY();
                repaint();
            }
        });
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.setColor(Color.BLUE);
        g.fillRect(playerX, playerY, 20, 20);
    }

    public static void main(String[] args) {
        EventQueue.invokeLater(() -> {
            RPGGamePrototype game = new RPGGamePrototype();
            game.setVisible(true);
        });
    }
}
