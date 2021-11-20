import { Directive, Input, HostBinding } from '@angular/core'
@Directive({
	selector: 'img[ykImgChecker]',
	host: {
		'(error)': 'updateUrl()',
		'[src]': 'src',
		'[ykholder]': 'ykholder'
	}
})

export class ImagePreloadDirective {
	@Input() src: string;
	@Input() ykholder: string; e

	updateUrl() {
		this.src = this.ykholder != null && this.ykholder != undefined && this.ykholder != "" ? "../../../assets/images/placeholders/" + this.ykholder : "../../../assets/images/placeholder.jpg";
	}
}