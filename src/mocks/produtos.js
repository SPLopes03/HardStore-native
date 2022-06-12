import caboHdmi from '../../assets/produtos/cabo-hdmi.webp';
import coolerFan from '../../assets/produtos/cooler-fan.jpg'
import gabinete from '../../assets/produtos/gabinete.jpg';
import memoria from '../../assets/produtos/memoria.jpg';
import monitor from '../../assets/produtos/monitor.jpg';
import mouse from '../../assets/produtos/mouse.webp';
import placaMae from '../../assets/produtos/placa-mae.jpg';
import placaVideo from '../../assets/produtos/placa-video.jpg';
import processador from '../../assets/produtos/processador.webp';
import teclado from '../../assets/produtos/teclado.jpg';

const produtos = {
    header: {
        titulo: 'HardStore'
    },
    itens: {
        titulo: 'Mercadoria',
        lista: [
            {
                nome: 'Cabo HDMI',
                imagem: caboHdmi,
                preco: 'R$ 50,00'
            },
            {
                nome: 'Cooler FAN',
                imagem: coolerFan,
                preco: 'R$ 30,00'
            },
            {
                nome: 'Gabinete',
                imagem: gabinete,
                preco: 'R$ 100,00'
            },
            {
                nome: 'Memória RAM 8GB',
                imagem: memoria,
                preco: 'R$ 200,00'
            },
            {
                nome: 'Monitor',
                imagem: monitor,
                preco: 'R$ 600,00'
            },
            {
                nome: 'Mouse',
                imagem: mouse,
                preco: 'R$ 150,00'
            },
            {
                nome: 'Placa Mãe',
                imagem: placaMae,
                preco: 'R$ 250,00'
            },
            {
                nome: 'Placa de Vídeo',
                imagem: placaVideo,
                preco: 'R$ 2300,00'
            },
            {
                nome: 'Processador I7',
                imagem: processador,
                preco: 'R$ 1950,00'
            },
            {
                nome: 'Teclado',
                imagem: teclado,
                preco: 'R$ 150,00'
            }
        ]
    }
};

export default produtos;