import express from "express";
import gTTS from "gtts";

const app = express();

let text = `A very warm welcome to all of your presents here. Today, I am here to deliver a speech on India. India, having the oldest civilization in the world, is one of the most diverse countries. It is famous for its rich culture, traditions and festivals. There are a total of  29 states in India and each state is rich in its own culture, festivals and cuisines. Therefore, the slogan ‘Unity in diversity’ sits perfectly with my country. You can find people of every caste, creed and religion here. India is the only country that has given birth to different Indian religions - Hinduism, Islam, Buddhism, Sikhism and Christianity. Out of which, Hinduism and Buddhism are considered the third and fourth-largest religions of the world respectively.
India has the largest Constitution in the world which strongly follows secularism and equality. It has been celebrating 73 years of independence since 15th August 1947 with Ram Nath Kovind being the current President. He is the nominal executive head of the country who is responsible for protecting and preserving the Indian Constitution. On the other hand, the Prime Minister of India is considered the head of the Government and is responsible for the distribution of work to various ministries and offices. Narendra Damodardas Modi is the present Prime Minister of India.
A federal form of government is followed in India, two different forms of Government-run the Constitution - the Central Government and the State Government. Apart from the President and Prime Minister, each state has its own Chief Minister who is responsible for the development of the assigned states. Being a secular and democratic country, India gives equal rights to all of its citizens to cast their votes for the government.
Also known as Bharat or Hindustan, Hindi is the national language of my country. But, apart from Hindi, each state has its native language. The national song of India is Vande Mataram and Delhi is the capital city of the country, which itself holds rich cultures and history from Ancient India. India is also famous for its various historical monuments and architecture, which makes it a major tourist destination.
Over the years, India has been growing beautifully in various fields be it in Science, Technology, Agriculture, Sports or the Economy. As a developing country, it stands 5th in the economy and is the 7th largest country in the world. To date, India is the second-largest producer of tea in the world after China. The massive production of Tea comes from the state of Assam which approximately produces 702 million kilograms of tea per year.
India also has the largest textile producing industries including cotton, silk, synthetic fibres, jute and wool. Uttar Pradesh is India’s only state which is famous for being the largest producer of sugar in the country.
Being a citizen of this country, I feel immensely proud to see India grow in the field of economy and industry every year. Lastly, I would like to conclude my speech by saying that we, all the citizens of India, must come together in preserving the rich cultural heritage of our country. It is our sole responsibility to make India proud and help it grow globally. 
`
const gtts = new gTTS(text, "en");

gtts.save("./src/OUTPUT_FILE/Voice.mp3", (err, result) => {
  if (err) {
    throw new Error(err);
  }
  console.log("Text to speech Audio file converted!");
});

//server
const port = 7000;
app.listen(port, console.log(`server is running on https://localhost:${port}`));