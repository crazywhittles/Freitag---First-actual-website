import Header from '../../components/header/header';
import './cars.css';

function cars() {
    return (
        <div className='car-body'>
            <Header />
            <header className='car-header'>
                <img
                    className='car-background'
                    src="https://cdn.discordapp.com/attachments/651034285125664769/858366621855514634/20210623_170605.jpg"
                    alt="cover">
                </img>
                <img
                    className='car-background2'
                    src="https://cdn.discordapp.com/attachments/810186625585774593/1075783136916541450/bmw.jpg"
                    alt="cover">
                </img>
                <p className="car-title">My Car Collection (real)</p>
            </header>
            <section className='car-section'>
                <div className='car-half'>
                    <p className='car-text-title'>
                        Car 1 - 2008 Kia Cee'd 1.6 LS
                    </p>
                    <p className='car-text'>
                        This was my first ever car that I bought, back in April
                        2019. This thing was an absolute beast, and quite nippy
                        for a first car. 120BHP from it's 1.6 petrol, a 0-60 of
                        like 10 seconds or something.
                    </p>
                    <p className='car-text'>
                        This thing was mega reliable, for the 1 and a half years
                        that I owned it, it had 0 problems, and super cheap to
                        run. However my young mind got bored of this and wanted
                        something a bit more special. If I kept this I'd probably
                        be rich enough to waste even more money on CSGO.
                    </p>
                </div>
                <div className='car-half'>
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/attachments/392231482875445258/620005311385960471/20190903_212254.jpg"
                        alt="cover">
                    </img>
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/attachments/810186625585774593/1075777231156166787/kia_lexus.jpg"
                        alt="cover">
                    </img>
                </div>
            </section>
            <section className='car-section'>
                <div className='car-half'>
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/attachments/651034285125664769/806216670057725982/20210202_074115.jpg"
                        alt="cover">
                    </img>
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/attachments/651034285125664769/728183018287661147/20200702_100543.jpg"
                        alt="cover">
                    </img>
                </div>
                <div className='car-half'>
                    <p className='car-text-title'>
                        Car 2 - 2004 BMW 3 Series 330ci
                    </p>
                    <p className='car-text'>
                        The BMW I had was for sure the fastest, and most luxurious
                        car that I have owned. But also it was the most silly
                        choice, very expensive to run and the one I got was kinda
                        shit LOL. This car didn't last long, from June 2020 to June
                        2021.
                    </p>
                    <p className='car-text'>
                        It had a mighty 230BHP from a 3 litre 6 cylinder engine
                        which was very fun. But unfortunately it's still a bmw.
                        Oh also it had an oil leak XD so you had to top it up
                        every month. I wouldn't recommend this car but I'm still
                        glad I got a chance to experience it.
                    </p>
                </div>
            </section>
            <section className='car-section'>
                <div className='car-half'>
                    <p className='car-text-title'>
                        Car 3 - 2008 Mazda MX-5 Sport
                    </p>
                    <p className='car-text'>
                        What a sexy little car... this had to be my favourite car
                        so far, my first japanese car and now I know why so many
                        people love them. It was RWD like my BMW, but had a sports
                        differential so you can do some mega drifts in it.
                    </p>
                    <p className='car-text'>
                        It was very fun to drive, the only problem was it was very
                        small and I could barely fit in it. I sold it in January
                        2023 as I wanted to get something bigger and actually
                        useable. I would highly recommend this car but the soft-top
                        version is quite high maintenence. I would probably get
                        this in the future, most likely the hard top version though.
                    </p>
                </div>
                <div className='car-half'>
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/attachments/651034285125664769/877931149681377320/20210622_155154.jpg"
                        alt="cover">
                    </img>
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/attachments/810186625585774593/1075758192883142808/20220815_090123.jpg"
                        alt="cover">
                    </img>
                </div>
            </section>
            <section className='car-section'>
                <div className='car-half'>
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/attachments/810186625585774593/1077534783351038013/20230220_135204.jpg"
                        alt="cover">
                    </img>
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/attachments/810186625585774593/1077534765466525737/20230220_135143.jpg"
                        alt="cover">
                    </img>
                </div>
                <div className='car-half'>
                    <p className='car-text-title'>
                        Car 4 - 2008 Mazda 6 2.5 Sport
                    </p>
                    <p className='car-text'>
                        For some reason I only buy cars from 2008... anyway, this
                        is the first proper car I have owned and so far I love it.
                        Super comfortable, lots of space and modern features.
                    </p>
                    <p className='car-text'>
                        It was quite cheap too, only 3.5k so this is amazing
                        value for money especially since you get so many modern
                        features. Although this one has kinda crap bodywork LOL!
                        So yeah that's all my cars so far... hopefully this one
                        lasts longer than 1 year.
                    </p>
                </div>
            </section>
            <section className='car-section2'>
                <div className='car-half'>
                    <p className='car-text-title'>
                        Car 9 - 2009 Audi RS4 Avant
                    </p>
                    <p className='car-text'>
                        jk
                    </p>
                </div>
                <div className='car-half'>
                    <img
                        className='car-pics'
                        src="https://m.atcdn.co.uk/a/media/w800h600/69fb689dc3b34d038f50b1e2759ea845.jpg"
                        alt="cover">
                    </img>
                </div>
            </section>
        </div>
    );
}

export default cars;