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
                imagem: caboHdmi
            },
            {
                nome: 'Cooler FAN',
                imagem: coolerFan
            },
            {
                nome: 'Gabinete',
                imagem: gabinete
            },
            {
                nome: 'Memória RAM',
                imagem: memoria
            },
            {
                nome: 'Monitor',
                imagem: monitor
            },
            {
                nome: 'Mouse',
                imagem: mouse
            },
            {
                nome: 'Placa Mãe',
                imagem: placaMae
            },
            {
                nome: 'Placa de Vídeo',
                imagem: placaVideo
            },
            {
                nome: 'Processador I7',
                imagem: processador
            },
            {
                nome: 'Teclado',
                imagem: teclado
            }
        ]
    }
};

export default produtos;