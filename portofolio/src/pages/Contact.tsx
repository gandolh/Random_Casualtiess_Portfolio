import { Card } from "flowbite-react";

const Contact = () => {

    const anchorStyle = {
        color: '#3197d6', textDecoration: 'underline'
    }
    return (
        <div className="container-wrapper">
            <div className="container container-contact">
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        You can find me on Instagram at:
                    </h5>
                    <img src="imgs/Assets/instagramProfile.png" className="IGP"></img>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <center> Social media</center>
                    </h5>
                    <div>

                        <p>Linkedin:</p>
                        <a className="flex gap-1" style={anchorStyle} href="https://www.linkedin.com/in/cristian-alexandru-gusatu">
                            https://www.linkedin.com/in/cristian-alexandru-gusatu</a><br />
                        <p>Instagram:</p>
                        <a className="flex gap-1" style={anchorStyle} href="https://www.instagram.com/random_casualtiess/">
                            https://www.instagram.com/random_casualtiess/</a>
                    </div>
                </Card>
                <Card
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="imgs/Assets/generatedPlant.png"
                >
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Thanks, this is a flower for your time spent reading this.
                    </p>
                </Card>
            </div>
        </div>
    );
}

export default Contact;

