import NjkCompiler  from './utils/njkCompiler.js';
import HeaderData from '../../data/header.json' assert { type: "json" };
import HeroData from '../../data/hero.json' assert { type: "json" };
import InfoData from '../../data/info.json' assert { type: "json" };
import SliderData from '../../data/slider.json' assert { type: "json" };
import FaqsData from '../../data/faqs.json' assert { type: "json" };
import FooterData from '../../data/footer.json' assert { type: "json" };

NjkCompiler('header', HeaderData);
NjkCompiler('hero', HeroData);
NjkCompiler('info', InfoData);
NjkCompiler('slider', SliderData);
NjkCompiler('faqs', FaqsData);
NjkCompiler('footer', FooterData);
