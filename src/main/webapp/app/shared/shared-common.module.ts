import { NgModule } from '@angular/core';

import { JhipsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsSharedCommonModule {}
