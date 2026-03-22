import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Music, Feather } from "lucide-react";

export const metadata: Metadata = {
  title: "Urdu Shayari",
  description: "Read beautiful AqsA Mirza Urdu shayari. Original poems and ghazals written in Urdu, Devanagari, and English transliteration, created by AQSA ZAM ZAM MIRZA JOHAR BAIG."
};

const SHAYARI_LIST = [
  {
    title: "Khwab Aur Haqeeqat (ख्‍वाब और हकीक़त - خواب اور حقیقت)",
    urdu: "خوابوں کی دنیا میں کھوئے رہتے ہیں,\nحقیقت سے ہم دور سوئے رہتے ہیں۔\nمنزل کی جستجو میں نکلے تو تھے,\nراستوں کے کانٹوں میں الجھے رہتے ہیں۔",
    devanagari: "ख़्वाबों की दुनिया में खोए रहते हैं,\nहक़ीक़त से हम दूर सोए रहते हैं।\nमंज़िल की जुस्तजू में निकले तो थे,\nरास्तों के काँटों में उलझे रहते हैं।",
    english: "Khwabon ki duniya mein khoye rehte hain,\nHaqeeqat se hum door soye rehte hain.\nManzil ki justajoo mein nikle toh the,\nRaaston ke kaanton mein uljhe rehte hain.",
    audio: "/audio/shayari1.mp3"
  },
  {
    title: "Zindagi Ka Safar (ज़िंदगी का सफ़र - زندگی کا سفر)",
    urdu: "زندگی ایک طویل سفر ہے,\nہر موڑ پہ نیا ایک ڈر ہے۔\nحوصلے ہو بلند تو کیا غم,\nہر مشکل سے نکلنے کا ہنر ہے۔",
    devanagari: "ज़िंदगी एक तवील सफ़र है,\nहर मोड़ पे नया एक डर है।\nहौसले हो बुलंद तो क्या ग़म,\nहर मुश्किल से निकलने का हुनर है।",
    english: "Zindagi ek taweel safar hai,\nHar mod pe naya ek darr hai.\nHauslay ho buland toh kya gham,\nHar mushkil se nikalne ka hunar hai.",
    audio: "/audio/shayari2.mp3"
  },
  {
    title: "Ishq-e-Haqeeqi (इश्क़-ए-हक़ीक़ी - عشق حقیقی)",
    urdu: "عشق کے رنگ میں جو رنگ جائے,\nدنیا کی محفلوں سے وہ بچ جائے۔\nدل میں بس جائے اگر یادِ خدا,\nروح کی تاریکی اجالے میں بدل جائے۔",
    devanagari: "इश्क़ के रंग में जो रंग जाए,\nदुनिया की महफ़िलों से वो बच जाए।\nदिल में बस जाए अगर याद-ए-ख़ुदा,\nरूह की तारीकी उजाले में बदल जाए।",
    english: "Ishq ke rang mein jo rang jaaye,\nDuniya ki mehfilon se woh bach jaaye.\nDil mein bas jaaye agar yaad-e-Khuda,\nRooh ki tareeki ujaaley mein badal jaaye.",
    audio: null
  },
  {
    title: "Dosti Ki Ahmiyat (दोस्ती की अहमियत - دوستی کی اہمیت)",
    urdu: "دوست وہ جو درد مسکرا کے سہے,\nآنسوؤں میں بھی ساتھی بن کے رہے۔\nرشتے تو خون کے ہوتے ہیں مگر,\nدوستی وہ جو خاموشی بھی پڑھے۔",
    devanagari: "दोस्त वो जो दर्द मुस्कुरा के सहे,\nआँसुओं में भी साथी बन के रहे।\nरिश्ते तो खून के होते हैं मग़र,\nदोस्ती वो जो खामोशी भी पढ़े।",
    english: "Dost woh jo dard muskura ke sahey,\nAansuon mein bhi saathi ban ke rahey.\nRishtay toh khoon ke hotay hain magar,\nDosti woh jo khamoshi bhi padhay.",
    audio: null
  },
  {
    title: "Waqt Ki Parvaaz (वक़्त की परवाज़ - وقت کی پرواز)",
    urdu: "وقت پرندے کی طرح اڑ جاتا ہے,\nیادوں کے کچھ نقوش چھوڑ جاتا ہے۔\nآج کی قدر کر اے مسافر,\nکل فقط ایک افسانہ بن جاتا ہے۔",
    devanagari: "वक़्त परिंदे की तरह उड़ जाता है,\nयादों के कुछ नक़ूश छोड़ जाता है।\nआज की क़दर कर ऐ मुसाफ़िर,\nकल फ़क़त एक अफ़साना बन जाता है।",
    english: "Waqt parinday ki tarah udd jaata hai,\nYaadon ke kuch naqoosh chhod jaata hai.\nAaj ki qadar kar ae musafir,\nKal faqat ek afsaana ban jaata hai.",
    audio: null
  },
  {
    title: "Umeed Ka Daman (उम्मीद का दामन - امید کا دامن)",
    urdu: "امید کا دامن نہ چھوڑنا کبھی,\nاندھیرے میں ہی روشنی ہے چھپی۔\nرات جتنی بھی کالی کیوں نہ ہو,\nصبح کی کرن ضرور ہے ابھری۔",
    devanagari: "उम्मीद का दामन ना छोड़ना कभी,\nअंधेरे में ही रौशनी है छुपी।\nरात जितनी भी काली क्यों ना हो,\nसुबह की किरन ज़रूर है उभरी।",
    english: "Umeed ka daaman na chhodna kabhi,\nAndhere mein hi roshni hai chhupi.\nRaat jitni bhi kaali kyon na ho,\nSubah ki kiran zaroor hai ubhri.",
    audio: null
  },
  {
    title: "Khamoshi Ke Alfaz (खामोशी के अल्फ़ाज़ - خاموشی کے الفاظ)",
    urdu: "خاموشی کے بھی اپنے الفاظ ہوتے ہیں,\nبہت گہرے اس کے راز ہوتے ہیں۔\nجو سن سکے دل کی دھڑکنوں کو,\nوہی سچے ہم راز ہوتے ہیں۔",
    devanagari: "खामोशी के भी अपने अल्फ़ाज़ होते हैं,\nबहुत गहरे इसके राज़ होते हैं।\nजो सुन सके दिल की धड़कनों को,\nवही सच्चे हमराज़ होते हैं।",
    english: "Khamoshi ke bhi apne alfaaz hote hain,\nBahut gehre iske raaz hote hain.\nJo sun sake dil ki dhadkanon ko,\nWoh hi sache humraaz hote hain.",
    audio: null
  },
  {
    title: "Mohabbat Ki Barish (मोहब्बत की बारिश - محبت کی بارش)",
    urdu: "محبت کی بارش میں بھگ لے ذرا,\nپیاسے دل کو تو سینچ لے ذرا۔\nدنیا کی جھلستی ہوئی دھوپ میں,\nیہ وہ سایہ ہے، بس رک لے ذرا۔",
    devanagari: "मोहब्बत की बारिश में भीग ले ज़रा,\nप्यासे दिल को तू सींच ले ज़रा।\nदुनिया की झुलसती हुई धूप में,\nये वो साया है, बस रुक ले ज़रा।",
    english: "Mohabbat ki barish mein bheeg le zara,\nPyaase dil ko tu seench le zara.\nDuniya ki jhulsati hui dhoop mein,\nYe wo saya hai, bas ruk le zara.",
    audio: null
  },
  {
    title: "Dil Ka Aaina (दिल का आईना - دل کا آئینہ)",
    urdu: "دل کے آئینے میں خود کو دیکھ,\nاپنی خامیوں پر تو بھی تفکر پھینک۔\nدوسروں پر انگلیاں اٹھانا تو آسان ہے,\nکبھی اپنے گریبان میں بھی تو جھانک۔",
    devanagari: "दिल के आईने में खुद को देख,\nअपनी खामियों पर तू भी तफ़क्कुर फेंक।\nदूसरों पर उंगलियाँ उठाना तो आसान है,\nकभी अपने गिरेबान में भी तू झाँक।",
    english: "Dil ke aaine mein khud ko dekh,\nApni khamiyon par tu bhi tafakkur phenk.\nDoosron par ungliyan uthana toh asaan hai,\nKabhi apne girebaan mein bhi tu jhaank.",
    audio: null
  },
  {
    title: "Manzil Ki Taraf (मंज़िल की तरफ़ - منزل کی طرف)",
    urdu: "قدم بڑھا منزل کی طرف بے باک ہو کر,\nخوف کے بادلوں سے سبھی پاک ہو کر۔\nکامیابی تیرے قدم چومے گی ضرور,\nگر محنت کرے تو یوں خاک ہو کر۔",
    devanagari: "क़दम बढ़ा मंज़िल की तरफ़ बेबाक हो कर,\nखौफ़ के बादलों से सभी पाक हो कर।\nकामयाबी तेरे क़दम चूमेगी ज़रूर,\nगर मेहनत करे तू यूँ ख़ाक हो कर।",
    english: "Qadam badha manzil ki taraf bebaak ho kar,\nKhauf ke baadalon se sabhi paak ho kar.\nKamyabi tere qadam choomegi zaroor,\nGar mehnat kare tu yun khaak ho kar.",
    audio: null
  }
];

export default function UrduShayariPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <Breadcrumbs />
      
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
          <Feather className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-outfit mb-4 text-gradient">
          AqsA Mirza Urdu Shayari
        </h1>
        <p className="text-xl text-muted-foreground">
          A collection of original Urdu poetry (Shayari & Ghazals) by AQSA ZAM ZAM MIRZA JOHAR BAIG, reflecting on love, life, and meaning.
        </p>
      </div>

      <div className="space-y-12">
        {SHAYARI_LIST.map((poem, index) => (
          <div key={index} className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
            <h2 className="text-2xl font-bold font-outfit mb-6 text-primary flex items-center justify-between">
              {poem.title}
              <span className="text-sm font-normal text-muted-foreground opacity-50">#0{index + 1}</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2 text-right">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold border-b border-white/10 pb-2 mb-4">Urdu</p>
                <div className="whitespace-pre-wrap font-sans text-xl leading-relaxed text-foreground" dir="rtl">
                  {poem.urdu}
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold border-b border-white/10 pb-2 mb-4">Hindi / Devanagari</p>
                <div className="whitespace-pre-wrap font-sans text-lg leading-relaxed text-slate-300">
                  {poem.devanagari}
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold border-b border-white/10 pb-2 mb-4">Roman English</p>
                <div className="whitespace-pre-wrap font-sans text-lg italic leading-relaxed text-slate-400">
                  {poem.english}
                </div>
              </div>
            </div>

            {poem.audio && (
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center gap-4">
                <Music className="w-5 h-5 text-primary shrink-0" />
                <div className="w-full">
                  <span className="text-sm text-muted-foreground block mb-2">Listen to recitation:</span>
                  <audio controls className="w-full h-10 custom-audio filter invert sepia opacity-80 rounded-md">
                    <source src={poem.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            )}
            
            <div className="absolute right-0 bottom-0 text-9xl font-serif text-white/[0.02] -z-10 pointer-events-none select-none translate-y-1/4 translate-x-1/4">
              &quot;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
