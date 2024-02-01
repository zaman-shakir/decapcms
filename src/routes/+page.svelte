<!-- src/routes/+page.svelte -->
<script>
        import { onMount } from 'svelte';

     import homepage from '../contents/homepage.md';

// // Declare reactive variables at the top level of the component
// let attributes = {};
// let html = '';

// onMount(async () => {
//     const response = await fetch(homepage);
//     console.log("response");
//     console.log(response);
//     const text = await response.text();
//     const { parsedAttributes, parsedHtml } = parseMarkdown(text); // Adjust variable names to avoid conflicts
//     attributes = parsedAttributes; // Assign values without the $ prefix
//     html = parsedHtml; // Assign values without the $ prefix
//     console.log(attributes);
// });

// // Function to parse Markdown content
// function parseMarkdown(text) {
//     // You need to implement parsing logic here
//     // This could involve using a Markdown parser library or custom parsing logic
//     // For simplicity, let's assume your Markdown has a specific format and you can parse it directly
//     const lines = text.split('\n');
//     let title = '';
//     // Assuming the first line contains the title
//     if (lines.length > 0) {
//         title = lines[0].trim();
//     }
//     return {
//         parsedAttributes: { title },
//         parsedHtml: text // For simplicity, just use the entire Markdown text as HTML
//     };
// }

   // Declare reactive variables at the top level of the component
   let attributes = {};
    let html = '';

    onMount(async () => {
        const response = await fetch(homepage);
        const text = await response.text();
        const { parsedAttributes, parsedHtml } = parseMarkdown(text);
        attributes = parsedAttributes;
        html = parsedHtml;
        console.log(attributes);
    });

    // Function to parse Markdown content
    function parseMarkdown(text) {
    // Extract YAML front matter and content
    const frontMatterRegex = /^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/;
    const matches = text.match(frontMatterRegex);
    let parsedAttributes = {};
    let parsedHtml = '';

    if (matches && matches.length === 3) {
        const frontMatter = matches[1];
        parsedHtml = matches[2];

        // Parse YAML front matter attributes
        parsedAttributes = parseYamlFrontMatter(frontMatter);
    } else {
        // If no front matter found, consider the entire text as content
        parsedHtml = text;
    }

    return {
        parsedAttributes,
        parsedHtml
    };
}

function parseYamlFrontMatter(frontMatter) {
    const attributeLines = frontMatter.split('\n');
    const attributes = {};

    attributeLines.forEach(line => {
        // Ignore empty lines and lines that don't contain a colon
        if (line.trim() && line.includes(':')) {
            const [key, value] = line.split(':').map(part => part.trim());
            attributes[key] = value;
        }
    });

    return attributes;
}

    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import animation from '../components/lottie.json';
    // import VideoPlayer from 'svelte-video-player';


</script>

  <Header />

    <div class="container-fluid first-section" style="display: flex;
    flex-direction: row;
    justify-content: center;">
        <div class="row container" style="margin-top:100px;padding-bottom:216px; width: 1116px;">
            <div class="col-7 col-md-7 col-sm-12">
                <div class="row">
                    <!-- <h1 class="fancy-text" style="font-size: 48px;line-height:64px; font-weight:700;">Pay & get paid in BTC <br> without touching Crypto</h1> -->
                    <h1 class="fancy-text" style="font-size: 48px;line-height:64px; font-weight:700;">{attributes.homepage_top_title}</h1>
                </div>
                <div class="row" style="margin-top: 40px;">
                    <!-- <p style="font-size:16px; color:#7E7E7E;font-weight:400;">Enjoy the benefits of cryptocurrency payments without having to hold or convert crypto, with zero-volatility and next-day bank settlement.</p> -->
                    <p style="font-size:16px; color:#7E7E7E;font-weight:400;">{attributes.description}</p>
                </div>
                <div class="row"  style="margin-top: 40px;">
                    <div class="col-6 col-md-6 col-sm-6">
                        <p  style="font-size:16px; color:#7E7E7E;font-weight:400;">Reach 420M+ crypto owners</p>
                        <p  style="font-size:16px; color:#7E7E7E;font-weight:400;">Licensed & Secure</p>
                    </div>
                    <div class="col-6 col-md-6 col-sm-6">
                        <p style="font-size:16px; color:#7E7E7E;font-weight:400;">Increase your revenue</p>
                        <p style="font-size:16px; color:#7E7E7E;font-weight:400;">White label</p>

                    </div>
                </div>
                <div class="row"  style="margin-top: 80px;">
                    <div class="col-5">
                        <button class="primary-btn btn-pm">Talk to our team</button>
                    </div>
                    <div class="col-5">
                        <button class="secondary-btn btn-pm">Sign up</button>
                    </div>
                </div>
                <div class="row" style="margin-top: 80px;">
                    <div class="col-3 video-row">
                        <a href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/09/logo-nobackground-5000-1-1.svg"} alt="brnad1"></a>
                    </div>
                    <div class="col-3 video-row">
                        <a  href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/07/image-15.svg"} alt="brnad1"></a>
                    </div>
                    <div class="col-3 video-row">
                        <a href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/07/image-16.svg"} alt="brnad1"></a>
                    </div>
                    <div class="col-3 video-row">
                        <a href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/07/image-17.svg"} alt="brnad1"></a>
                    </div>
                </div>
            </div>
            <!-- src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", -->
            <!-- poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg" -->

            <div class="col-5" >
                <video
                src="homepage-top.mp4",
                width="570px"
                autoplay muted loop
                ><track kind="captions"></video>
                <!-- <VideoPlayer width="500" height="500" poster="./local_poster.jpg" source="../components/homepage_top.mp4" loop="true" /> -->
            </div>
        </div>
    </div>

    <div class="container-fluid second-section" style="display: flex;
    flex-direction: row;
    justify-content: center;" >
        <div class="container" style="width: 1116px;">
            <div class="row second-space" style="height: 300px;" >&nbsp;

            </div>
            <div class="row" style="justify-content: center;">
                <h1 class="secondary-text" style="    display: flex;
                /* align-items: center; */
                justify-content: center;
                color: #FFF;
                font-family: 'DM Sans', Sans-serif;
                font-size: 44px;
                font-weight: 700;
                line-height: 64px;
                width:700px;
                margin-bottom:60px;
            ">420 million people worldwide
                    want you to offer</h1>
            </div>
            <div class="row" style="margin-top: 60px; margin-bottom:100px">
                <ul class="nav nav-tabs" id="myTab" role="tablist" style="margin-bottom: 60px;">
                    <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Crypto Payments</button>
                    </li>
                    <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Crypto Payouts</button>
                    </li>

                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="row">
                            <div class="col-6">
                                <video
                                src="homepage-cryptopayments.mp4",
                                width="510px"
                                height="510px"
                                autoplay muted loop
                                >
                                <track kind="captions">
                                </video>
                            </div>
                            <div class="col-6" style="    display: flex;
                            flex-direction: column;
                            justify-content: center;">
                                <div class="row" style="margin-bottom:30px;color:#FFF;  font-size:18px;line-height:26px;"><p>Accept payments from a new audience of 420 million crypto owners without holding and converting crypto.</p></div>
                                <div class="row"  style="margin-bottom:30px;color:#FFF;  font-size:18px;line-height:26px;"><p>
                                    Accept payments from a new audience of 420 million crypto owners without holding and converting crypto.
                                    Enjoy lower transaction fees, faster settlements and no chargebacks!</p></div>
                                <div class="row">
                                    <button class="secondary-btn  btn-pm btn-trans">Find out more</button>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="row">
                            <div class="col-6">
                                <video
                                src="homepage-cryptopayouts.mp4",
                                width="510px"
                                height="510px"
                                autoplay muted loop
                                >
                                <track kind="captions">
                                </video>                        </div>
                            <div class="col-6" style="    display: flex;
                            flex-direction: column;
                            justify-content: center;">
                                <div class="row"  style="margin-bottom:30px;color:#FFF; font-size:18px;line-height:26px;"><p>Accept payments from a new audience of 420 million crypto owners without holding and converting crypto.</p></div>
                                <div class="row"  style="margin-bottom:30px;color:#FFF; font-size:18px;line-height:26px;"><p>
                                    Accept payments from a new audience of 420 million crypto owners without holding and converting crypto.
                                    Enjoy lower transaction fees, faster settlements and no chargebacks!</p></div>
                                <div class="row">
                                    <button class="secondary-btn btn-pm btn-trans">Find out more</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="margin-top: 100px;     display: flex;
                justify-content: space-evenly;">
                    <div class="col-2 video-row">
                        <a href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/08/62b0c3d62951158751131e7e_1.svg.svg"} alt="brnad1"></a>
                    </div>
                    <div class="col-3 video-row">
                        <a href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/08/62b0c3d79103d607ae28ea89_bookingcom-logo-svgrepo-com201.svg.svg"} alt="brnad1"></a>
                    </div>
                    <div class="col-2 video-row">
                        <a href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/08/Frame-2610802.svg"} alt="brnad1"></a>
                    </div>
                    <div class="col-2 video-row">
                        <a href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/08/Frame-2610799.svg"} alt="brnad1"></a>
                    </div>
                    <div class="col-2 video-row">
                        <a href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/07/razer-1-1.svg"} alt="brnad1"></a>
                    </div>
                </div>
                <div class="row" style="display: flex;
                justify-content: space-evenly;margin-top:28px;">
                    <div class="col-2 video-row">
                        <a href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/10/istudio_logo.png"} alt="brnad1"></a>
                    </div>
                    <div class="col-2 video-row">
                        <a href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/08/Frame-2610798.svg"} alt="brnad1"></a>
                    </div>
                    <div class="col-2 video-row">
                        <a href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/08/Frame-2610800.svg"} alt="brnad1"></a>
                    </div>
                    <div class="col-2 video-row">
                        <a href="https://www.google.com"><img src={"https://triple-a.io/wp-content/uploads/2023/08/628c0242eac3cc8248526caa_Asset-24-1-1.svg"} alt="brnad1"></a>
                    </div>

                </div>
            </div>
            <div class="row">
                <p style="color: #FFF; font-size:16px">Crypto Payments</p>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-6">
                            <h2 style="color: #FFF; font-size:32px;margin-top:60px;margin-bottom:90px;">Accept crypto, receive funds
                                in USD
                                the next day.</h2>
                                <button class="primary-btn btn-pm">Find Out More</button>
                        </div>
                        <div class="col-6"style="color: #FFF; font-size:16px;margin-top:60px;" >
                            <p style="font-weight: 700;">Never touch crypto </p>
                            <p>Next-day bank settlement in over 50+ local currencies</p>

                            <p style="font-weight: 700;">Best payment experience</p>
                            <p>Compatible with all wallets</p>

                            <p style="font-weight: 700;">Eliminate chargebacks</p>
                            <p>Payments are irreversible</p>

                            <p style="font-weight: 700;">Zero volatility</p>
                            <p>Locked-in exchange rate</p>


                        </div>
                    </div>

                </div>
                <div class="col-6">
                    <img class="width100" src={"https://triple-a.io/wp-content/uploads/2023/08/Frame-70.png"} alt="crypto payments">


                </div>
            </div>
        </div>

    </div>
    <div class="row third-section container-fluid" style="display: flex;
    flex-direction: row;
    justify-content: center; margin-top: -235px;padding-top:260px;
    z-index: -1;
">
        <div class="container" style="width: 1116px;">
            <div class="row" style="margin-bottom: 30px;">
                <div class="col-6"> &nbsp;
                </div>
                <div class="col-6">
                    <p>Crypto Payouts</p>
                </div>

            </div>
            <div class="row">
                <div class="col-6" style="display: flex;
                justify-content: center;
                flex-direction: column;">
                    <img class="width100" src={"https://triple-a.io/wp-content/uploads/2023/08/Group-130-min.png"} alt="crypto payments">

                </div>
                <div class="col-6">
                    <div class="row" style="margin-bottom: 90px;">
                        <h1 style="font-size: 32px;">Pay anyone, anywhere with crypto.
                        </h1>
                    </div>
                    <div class="row" >
                        <div class="col-4">
                            <p>Never touch crypto </p>
                            <p>Send crypto payments without holding or managing crypto.</p>
                            <p>Available 24/7</p>
                            <p>Real-time payouts</p>
                        </div>
                        <div class="col-4">
                            <p>Save on fees</p>
                            <p>Pay lower fees than traditional remittance and cross-border payment solutions.</p>
                            <p>Zero volatility</p>
                            <p>Locked-in exchange rate</p>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 60px; margin-bottom:60px">
                        <button class="primary-btn btn-pm">Find Out More</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row fourth-section container-fluid" style="display: flex;
    flex-direction: row;
    justify-content: center;     margin-top: -200px;
    padding-top: 320px;
    z-index: -2;
    padding-bottom: 100px;">
        <div class="container" style="width: 1116px;display: flex;
        flex-direction: column;
        align-items: center;" >
            <div class="row" style="margin-bottom:60px;">
                <h1 style="color:#FFF;">Industries we serve​</h1>
            </div>
            <div class="row sec4-btn" style="display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            width: 700px;
        }" >
                <button>E-Commerce</button>
                <button>Marketplaces</button>
                <button>Gaming</button>
                <button>Gaming</button>
                <button>Luxury</button>
                <button>Travel and Hospitality</button>
                <button>Real Estate</button>
                <button>Fashion</button>
                <button>Fintech & EMIs</button>
                <button>Payment Service Providers</button>
                <button>Professional Services</button>
                <button>Creator Economy platforms</button>


            </div>
            <div class="row" style="height:100px"> &nbsp;
\            </div>
            <div class="row sec4-btn" style="display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            width: 700px;">
                <h3 style="color:#FFF; width:fit-content">I am </h3><button> an E-Commerce</button>
                <button>a Marketplaces</button>
                <button>a Luxury Business</button>
\            </div>
        </div>
    </div>
    <div class="row fift-section container-fluid" style="display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 150px;

    padding-bottom: 150px;">
        <div class="container" style="width: 1116px;display: flex;
        flex-direction: column;
        align-items: center;" >
            <div class="row" style="margin-bottom:60px;">
                <h1 style="color:#161141; font-size:64px; line-height:79px;text-align: center;">Join over 20,000 businesses
                    enjoying the benefits of digital currency payments with Triple-A.​</h1>
            </div>
            <div class="row" style="display: flex;
            justify-content: space-around;">
                <div class="col-3">
                    <button style="color:#161141 !important; background-color:#FFF; border: 1px solid #7E7E7E !important;"  type="button" class="secondary-btn btn-pm">Get in touch</button>
                </div>
                <div class="col-3">
                    <button  type="button" class="primary-btn btn-pm">Sign up</button>

                </div>

            </div>
        </div>
    </div>

<style>
    .width100{
        width: 100%;
    }
    .first-section{
        background-image: url("https://newtriplea.wpengine.com/wp-content/uploads/2023/08/Frame-2610578.svg");
        background-position: center center;
        background-size: cover;
    }

    .second-section{
        background-image: url("https://triple-a.io/wp-content/uploads/2023/09/Frame-2610813.png");
        /* background-position: center center; */
        background-size: cover;
        margin-top: -180px;
    }
    .third-section{
        background-image: url("https://triple-a.io/wp-content/uploads/2023/08/Group-628202.svg");
        /* background-position: center center; */
        background-size: cover;
        margin-top: -180px;
    }
    .fourth-section{
        background-color: #161141;
    }
    .fifth-section{
        background-image: url("https://triple-a.io/wp-content/uploads/2023/08/Group-628202.svg");
        background-position: center center;
        background-size: cover;
    }
    .video-row{
        display: flex;
    flex-direction: row;
    align-items: center;
    }
    .nav-item{
        width: 50%;
        display: flex;
    justify-content: center;
    align-items: center;
    }
    .nav-item button{
        color: #7E7E7E;
        border-color: transparent ;
        background-color: transparent;
        font-weight: 400;
        font-size: 24px;
    }
    .nav-link.active{
        font-weight: 500;
        color: #FFF;
    }
    .sec4-btn button{
        width: fit-content;
        background-color: transparent;
        color: #FFF;
        border-radius: 150px;
        border:solid 1px #fff;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 16px;
        padding-right: 16px;
        margin-bottom: 30px;

    }
</style>
  <Footer />
