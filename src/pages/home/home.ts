import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Take_Medicine, Cost, Detect } from '../../common/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  medics: Take_Medicine[];
  costs: Cost[];
  detects: Detect[];
  
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.getDataSource();
  }
  getDataSource() {
    // 用药说明
    this.medics = [
      {id:1, name: "药物A", usage: "每日一次，一次一粒", imageUrl: "../assets/imgs/home/medic.jpg"}, 
      {id:1, name: "药品B", usage: "每日两次，一次半粒", imageUrl: "../assets/imgs/home/medic.jpg" },
      {id:1, name: "药品C", usage: "两日一次， 一次一粒", imageUrl: "../assets/imgs/home/medic.jpg"},
    ];
    // 费用
    this.costs = [
      {id: 1, title: "费用订单A", desc: "医药，治疗，住院", imageUrl: "../assets/imgs/home/cost.jpg"},
    ];
    // 检测
    this.detects = [
      {id: 1, title: "检测结果A", notification: "指标A数据异常", imageUrl: "../assets/imgs/home/detect.jpg"},
      {id: 2, title: "检测结果B", notification: "指标B数据异常", imageUrl: "../assets/imgs/home/detect.jpg"},
      {id: 3, title: "检测结果C", notification: "指标C数据异常", imageUrl: "../assets/imgs/home/detect.jpg"},
    ]
  }

}
