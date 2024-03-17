import HbsCompiler  from './utils/hbsCompiler.js';
import HeroData from './../../data/hero.json' assert { type: "json" };

HbsCompiler('hero', HeroData);
