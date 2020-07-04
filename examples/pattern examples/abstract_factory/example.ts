interface SoundFactory {
  create: Function;
}

interface Sound {
  enable: Function;
}

class FerrariSound implements Sound {
  enable(): void {
    console.log('Wrooom-wrooom-wrooooom!');
  }
}

class BirdSound implements Sound {
  enable(): void {
    console.log('Flap-flap-flap');
  }
}

class FerrariSoundFactory implements SoundFactory {
  create(): Sound {
    return new FerrariSound();
  }
}

class BirdSoundFactory implements SoundFactory {
  create(): Sound {
    return new BirdSound();
  }
}

(() => {
  let factory: SoundFactory | null = null ;

  const type = Math.random() > 0.5 ? 'ferrari' : 'bird';

  switch (type) {
    case 'ferrari':
      factory = new FerrariSoundFactory();
      break;
    case 'bird':
      factory = new BirdSoundFactory();
      break;
  }

  if (factory) {
    const soundMaker = factory.create();
    soundMaker.enable();
  }

})();


