import {Component, computed, inject, Input, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {delay, of, tap} from "rxjs";
import {MemberService} from "../../service/member.service";

@Component({
  selector: 'app-member-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-detail-page.component.html',
  styleUrls: ['./member-detail-page.component.scss']
})
export class MemberDetailPageComponent implements OnInit {

  @Input() id!: string;
  readonly memberService = inject(MemberService);
  detail$: any;

  member: WritableSignal<string> = signal(`${this.memberService.List$()[0]}`);
  memberFirstNameLastname: Signal<string> = computed(() => this.memberService.List$().find((m: string) => m === this.id) ||
    'not found');
  ngOnInit(): void {
    this.getDetail();
    //this.getData()
  }
  private setDetail(): void {
    this.memberService.setDetail(this.id);
  }

  private getDetail() {
    this.detail$ = computed(() => this.memberService.List$().find((m: string) => m === this.id) ||
      'not found');
  }
  getData(): void {
    of(this.member()).pipe(
      delay(5000),
      tap(() => this.member.set('Nicolas'))
    ).subscribe();
  }


}
