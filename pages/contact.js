import Front from '../components/front';
import Header from '../components/header';
import Content from '../components/content';
import ContactTarget from '../components/contact_target';
import Footer from '../components/footer';
import useScroll from '../hooks/scroll';


export default function Contact() {
    let scroll = useScroll();
    return (
        <div style={{
            position: 'relative',
        }}
            className='principal'>
            <Front border={scroll}>
                <div>
                    <h1>Contact</h1>
                    <div>Por cualquier duda o consulta comuniquense sin miedo 📧</div>
                </div>
            </Front>
            <Header scroll={scroll} />
            <section style={{margin:'0 auto',width:'90vw'}}>
                <Content type='contact'>
                    <section style={{
                        width:'80vw',
                        display:'flex',
                        flexWrap: 'wrap',
                        gap:'20px',
                        alignItems:'center',
                        justifyContent:'center',
                        margin: '0 auto'
                    }}>
                        <ContactTarget title='Discord' img='/img/contact/discord.svg' url='https://discordapp.com/users/Lorren#0883'/>
                        <ContactTarget title='Telegram' img='/img/contact/telegram.svg' url='https://t.me/brunoripoll'/>
                        <ContactTarget title='GitHub' img='/img/contact/github.svg' url='https://github.com/Bandikyu'/>
                        <ContactTarget title='LinkedIn' img='/img/contact/linkedin.svg' url='https://linkedin.com/in/bruno-ripoll-ramos'/>
                        <ContactTarget mail={true} title='Email' img='/img/contact/gmail.svg'/>
                    </section>
                </Content>
            </section>
            <Footer />
        </div>
    )



}