import { Component } from '@angular/core';
import { Istudents } from './models/student';
import { students } from './const/student';
import { aiArr } from './const/ai';
import { Iai } from './models/aiInterface';
import { mathArr } from './const/math';
import { Imath } from './models/math_interface';
import { roboticsArr } from './const/robotics';
import { Irobotics } from './models/robotics_interface';
import { businessArr } from './const/businessData';
import { Abusiness } from './models/businessInterface';
import { geographyArr } from './const/geographyData';
import { Igeography } from './models/geographyI';
import { psychologyArr } from './const/psycologyData';
import { Ipsycology } from './models/psycologyI';
import { biologyArr } from './const/biologyData';
import { Ibiology } from './models/biologyI';
import { techToolsArr } from './const/techToolsdata';
import { ItechTool } from './models/techTools_i';
import { educationArr } from './const/education';
import { Ieducation } from './models/education_i';
import { cloudArr } from './const/cloudArrData';
import { Icloud } from './models/cloudArr_i';
import { IwebDev } from './models/webDev_i';
import { webDevArr } from './const/webDevDataArr';
import { Idatabase } from './models/dataBase_i';
import { databaseArr } from './const/dataBaseArr';
import { IcyberSecurity } from './models/cyberSecurity_i';
import { cyberSecurityArr } from './const/cyberSecurityData';
import { IhealthArr } from './models/healthArr_i';
import { healthArr } from './const/healthDataArr';
import { Ispace } from './models/spaceArr_i';
import { spaceArr } from './const/spaceArr';
import { Ifinance } from './models/finance_i';
import { financeArr } from './const/financeData';
import { Idevops } from './models/devops_i';
import { devOpsArr } from './const/devopsArr';
import { Ilangauge } from './models/langauge_i';
import { languageArr } from './const/langaugeDataArr';
import { Ienvironment } from './models/environment_i';
import { environmentArr } from './const/environmentDataArr';
import { Idesign } from './models/design_i';
import { designArr } from './const/designArr';
import { Iphysics } from './models/physics_i';
import { physicsArr } from './const/physicsDataArr';
import { Iarchitecture } from './models/architecture_i';
import { architectureArr } from './const/architecture';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First App in Angular';
  name = "I am Gaurav"
  skills = ["JS", "CSS", "HTML", "TS", "ANGULAR", "JAVA", "SQL", "ADV.JAVA"];
  studentNames = ["Gaurav", "Abhi", "Shubham", "Harsh", "Mayur", "Dinesh"]
  booksArr = ["Silent Mind","Rich Dad Poor Dad", "Atomic Habits", "The Good One", "New Life", "My Child"];
  foodsArr = ["Birani", "VadaPav", "Samosa", "Kachori", "Pav-Bhaji","Misal"];
  bikesArr = ["R15 v4", "KTM", "Bullet", "X-Tream", "APACHE"]

  studentsArr :  Istudents[]  = students;

  aiArrs : Iai[] = aiArr;

  mathArrs : Imath[] = mathArr;

  roboticsArrs : Irobotics[] = roboticsArr;

  businessArrs : Abusiness[] = businessArr;

  geographyArrs : Igeography[]= geographyArr;

  psycologyArrs : Ipsycology[] = psychologyArr

  biologyArrs : Ibiology[] = biologyArr 

  techToolsArrs : ItechTool[] = techToolsArr

  educationArrs : Ieducation[] = educationArr

  cloudArrs : Icloud[] = cloudArr

  webDevArrs : IwebDev[] = webDevArr

  dataBaseArrs : Idatabase[] = databaseArr

  cyberSecurityArrs : IcyberSecurity[] = cyberSecurityArr

  healthArrs : IhealthArr[] = healthArr

  spaceArrs : Ispace[] = spaceArr

  financeArrs : Ifinance[] = financeArr

  devopsArrs : Idevops[] = devOpsArr

  languageArrs : Ilangauge[] = languageArr

  environmentArrs : Ienvironment[] = environmentArr

  designArrs : Idesign[] = designArr

  physicsArrs : Iphysics[] = physicsArr

  architectureArrs : Iarchitecture[] = architectureArr
}



