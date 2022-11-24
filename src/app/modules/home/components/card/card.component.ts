import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public cards: Team[] = [
    {
      id: 1,
      img: 'https://vpeacock.github.io/rsschool-cv/assets/img/my-photo.jpg',
      title: 'Valentina',
      position: 'Frontend developer',
      description: `An integral member of
       a well-coordinated team, ready to do anything to achieve the set goals. Led the development
       of the page with the boards. Made a general contribution to
       the style of the application and its additional functionality`,
      link: 'https://github.com/vpeacock',
    },
    {
      id: 2,
      img: 'https://avatars.githubusercontent.com/u/38830168?v=4',
      title: 'Aliaksandr',
      position: 'Software Engineer',
      description: `Assistance on all issues && just handsome
      A member of the team who is ready to help with any questions that arise.
      He set the lost souls on the right path and is just a good person
      who cares about everything that happens in the project.`,
      link: 'https://github.com/siarohin',
    },
    {
      id: 3,
      img: 'https://radiance77.github.io/rsschool-cv/assets/img/photo.jpg',
      title: 'Angelina',
      position: 'Frontend developer',
      description: `An integral member of
       a well-coordinated team, ready to do anything to achieve the set goals. Led the development
       of the page with the boards. Made a general contribution to
       the style of the application and its additional functionality`,
      link: 'https://github.com/radiance77',
    },
    {
      id: 4,
      img: 'https://media-exp1.licdn.com/dms/image/D4D03AQHFVld4HVn1wQ/profile-displayphoto-shrink_800_800/0/1661338961134?e=1674691200&v=beta&t=I3X6fT9SQXnURVBtsa5-1x79bVpHAOGbZrbaM_pShOU',
      title: 'Valery',
      position: 'Frontend developer',
      description: `A member of a well-coordinated team, ready to do everything.
       Led the development of the home page, and pages for user registration and
       login. Resurrected the backend from the dead, and broke the github
       finally finished the rsleng cookie
       `,
      link: 'https://github.com/Cstrp',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
