import { NgModule } from '@angular/core';
import { AlertComponent} from './alert.component';
import { MaterialModule} from '../../angular-Material/material.module'
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
@NgModule({
    declarations:[
        AlertComponent
    ],
    imports: [
        MaterialModule,
        TranslateModule,
        FuseSharedModule
    ],
    exports: [
        AlertComponent
    ]
})
export class AlertModule
{

}
