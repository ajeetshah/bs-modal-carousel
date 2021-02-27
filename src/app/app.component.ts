import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbModal, NgbCarouselConfig],
})
export class AppComponent {
  constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 5000;
    config.animation = true;
    config.keyboard = true;
  }

  activeSlideId = '';

  openModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-slide-show' });
  }

  page = 1;
  count = 0;
  tableSize = 8;
  tableSizes = [5, 10, 15, 25];

  searchtext: string = '';
  form: FormGroup;
  sPosition = 0;

  @ViewChild('content', { static: true }) content: any;

  slidesStore = [
    {
      id: '39',
      name: 'Nature Photography',
      description:
        'Natural photography comprises of pictures of nature as viewed from the eyes of the photographer. Contrary to what many people believe, nature photography is not only restricted to capturing the images of trees and plants, but rather includes any outdoor natural aspect including hills, water bodies and even the sky.',
      image: '1613460415834_nature-photography.jpg',
      createdAt: 1613730219987,
      views: 165,
    },
    {
      id: '34',
      name: 'Fashion Photography',
      description:
        'Fashion photography captures models in a glamorous light display fashion items such as clothes, shoes and other accessories. This type of photography is conducted mostly for advertisements and fashion magazines.',
      image: '1613460222468_fashion-photography.jpg',
      createdAt: 1613460222472,
      views: 164,
    },
    {
      id: '41',
      name: 'Real Estate Photography',
      description:
        'With the ever increasing competition in the real estate sector, the trend of real estate photography is fast catching up as a mean to attract prospective clients. This photography is generally utilized by real estate agents and developers to highlight the specific features of a property for buyers to investors.',
      image: '1613460491078_real-estate-photography.jpg',
      createdAt: 1613460491081,
      views: 132,
    },
    {
      id: '38',
      name: 'Modeling Photography',
      description:
        'This genre of photography is related to clicking pictures of professional models for promotion of various products and services. This type of photography is mostly used by business organizations for brand establishment and is carried out by professional photographers from this specific niche.',
      image: '1613460386529_g6.jpg',
      createdAt: 1613460386532,
      views: 69,
    },
    {
      id: '43',
      name: 'Sunrise/Sunset Photography',
      description:
        'This type of photography involves capturing mesmerizing images of the rising and setting sun. These pictures are generally clicked from the peak of a hill or top of a high rise building that provides a clear view of the sky and enables the photographers to capture the beauty of the phenomena.',
      image: '1613460549929_sunrise-sunset-photography.jpg',
      createdAt: 1613460549932,
      views: 51,
    },
    {
      id: '44',
      name: 'Portrait Photography',
      description:
        'One of the oldest types of photography is portrait photography. It can range from shooting your family members to friends to pets. It is often called portraiture and this type of photographer abounds.',
      image: '1613460576713_portrait-photography.jpg',
      createdAt: 1613460576716,
      views: 47,
    },
    {
      id: '33',
      name: 'Black And White Photography',
      description:
        'The trend of capturing pictures in black and white is popular even today as it helps to bring out the natural beauty of the subjects. This type of photography makes extensive use of contrasts and shadows to give the pictures a realistic and beautiful look.',
      image: '1613460146359_Black-and-white-photography.jpg',
      createdAt: 1613460146365,
      views: 45,
    },
    {
      id: '46',
      name: 'Aerial photography',
      description:
        'Aerial photography is that kind of photography where pictures are captures from a higher altitude such as planes, air balloons, parachutes and skyscrapers. These pictures provide a larger view of the subject and its background.',
      image: '1613460746506_aerial-photography.jpg',
      createdAt: 1613460746509,
      views: 32,
    },
    {
      id: '45',
      name: ' Sports / Action Photography',
      description:
        'This genre of photography specializes in capturing a decisive moment in an event of sports. Sports photography is one of the difficult types of photography. It requires practice along with the various equipments.',
      image: '1613460594267_sports-photography.jpg',
      createdAt: 1613460594302,
      views: 3,
    },
    {
      id: '49',
      name: 'Test',
      description: 'Test',
      image: '1613739107505_water_lily_lotus_flower_134572_1920x1080.jpg',
      createdAt: 1613739107544,
      views: 3,
    },
    {
      id: '48',
      name: 'Bird Photography',
      description:
        'Bird photography is one of the oldest and most popular types of photography that has been pursued by both amateur and skilled professionals. Bird photography requires extreme patience and skill on the part of the photographers as these feathered creatures are extremely moody in maintaining their position and pose.',
      image: '1613461079765_Bird-photography.jpg',
      createdAt: 1613461079768,
      views: 2,
    },
    {
      id: '47',
      name: 'Wildlife Photography',
      description:
        'The genre of photography that focuses on animals and their natural habitat is called wildlife photography. Animal behaviors in wild are also capture by wildlife photographer. Mostly these pictures are captured to be printed in journals or exhibitions. Many people practice this type of photography. Apart from a good camera, several lens, strong flashlight, you need patience to click the right picture.',
      image: '1613460817049_496574.jpg',
      createdAt: 1613460817052,
      views: 1,
    },
    {
      id: '35',
      name: 'Food Photography',
      description:
        'Food photography is the art of clicking images of various food items in manner that makes it immediately appealing to the viewers. The food photographers need to pay attention to not only the proper arrangement of the food but also the context in which it is to be presented to get the best shots.',
      image: '1613460249763_food-photography.jpg',
      createdAt: 1613460249766,
      views: 1,
    },
    {
      id: '42',
      name: ' Street Photography',
      description:
        'Street photography is generally use to reflect the everyday life trends prevalent in the society and is used for showing a mirror to the people. In most cases the images that comprise street photography are considered ironic and distanced from the subject in some manner',
      image: '1613460523925_Street-photography.jpg',
      createdAt: 1613460523929,
      views: 1,
    },
    {
      id: '36',
      name: 'Infrared Photography',
      description:
        'This photography is generally used as a means of exploring the unseen aspects within an environment, by the photographers. The images are clicked using special equipment that is sensitive to the infrared light and not the visible light spectrum that helps them to see objects normally.',
      image: '1613460326579_infrared-photography.jpg',
      createdAt: 1613460326582,
      views: 1,
    },
    {
      id: '37',
      name: 'Micro Photography',
      description:
        'This is a special genre of photography, wherein the images are clicked with the help of a microscope. Micro photography plays an important role in medical research for understanding the physical traits and features of organisms that are too small to be seen by naked eye',
      image: '1613460361879_micro-photography.jpg',
      createdAt: 1613460361882,
      views: 1,
    },
    {
      id: '50',
      name: 'Butterfly',
      description:
        'Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight. ',
      image: '1614143050598_butterfly.jpg',
      createdAt: 1614143050606,
      views: 1,
    },
    {
      id: '40',
      name: 'Rain Photography',
      description:
        'Rainbows are one of the most beautiful aspects of nature and capturing their unique beauty through their camera is a special skill possessed only by expert rainbow photographers. This type of photography is used to enhance the mesmerizing appeal of the rainbows by clicking their images in an enchanting backdrop.',
      image: '1613460445016_Rain-photography.jpg',
      createdAt: 1613460445020,
      views: 1,
    },
  ];

  show(id: number | string, i: number) {
    this.openModal(this.content);
    this.activeSlideId = id + '';
  }

  searchChange(newName: string) {
    this.searchtext = newName;
  }

  onTableDataChange(event) {
    this.page = event;
  }

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
