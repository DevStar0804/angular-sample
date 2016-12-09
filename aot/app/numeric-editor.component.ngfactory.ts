/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../app/numeric-editor.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/core/src/linker/query_list';
import * as import11 from '../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import12 from '../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import13 from '../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/forms/src/directives/default_value_accessor';
import * as import16 from '@angular/forms/src/directives/control_value_accessor';
import * as import17 from '@angular/forms/src/directives/ng_model';
import * as import18 from '@angular/forms/src/directives/ng_control';
import * as import19 from '@angular/forms/src/directives/ng_control_status';
export class Wrapper_NumericEditorComponent {
  context:import0.NumericEditorComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.NumericEditorComponent();
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_NumericEditorComponent_Host:import2.RenderComponentType = (null as any);
class _View_NumericEditorComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _NumericEditorComponent_0_4:Wrapper_NumericEditorComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_NumericEditorComponent_Host0,renderType_NumericEditorComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'numeric-cell',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_NumericEditorComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NumericEditorComponent_0_4 = new Wrapper_NumericEditorComponent();
    this._appEl_0.initComponent(this._NumericEditorComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._NumericEditorComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.NumericEditorComponent) && (0 === requestNodeIndex))) { return this._NumericEditorComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NumericEditorComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._NumericEditorComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._NumericEditorComponent_0_4.context.ngAfterViewInit(); } }
  }
}
function viewFactory_NumericEditorComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_NumericEditorComponent_Host === (null as any))) { (renderType_NumericEditorComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_NumericEditorComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const NumericEditorComponentNgFactory:import9.ComponentFactory<import0.NumericEditorComponent> = new import9.ComponentFactory<import0.NumericEditorComponent>('numeric-cell',viewFactory_NumericEditorComponent_Host0,import0.NumericEditorComponent);
const styles_NumericEditorComponent:any[] = ([] as any[]);
var renderType_NumericEditorComponent:import2.RenderComponentType = (null as any);
class _View_NumericEditorComponent0 extends import1.AppView<import0.NumericEditorComponent> {
  _viewQuery_input_0:import10.QueryList<any>;
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _DefaultValueAccessor_0_5:import11.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_0_6:any[];
  _NgModel_0_7:import12.Wrapper_NgModel;
  _NgControl_0_8:any;
  _NgControlStatus_0_9:import13.Wrapper_NgControlStatus;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_NumericEditorComponent0,renderType_NumericEditorComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_input_0 = new import10.QueryList<any>();
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'input',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    this._DefaultValueAccessor_0_5 = new import11.Wrapper_DefaultValueAccessor(this.renderer,new import14.ElementRef(this._el_0));
    this._NG_VALUE_ACCESSOR_0_6 = [this._DefaultValueAccessor_0_5.context];
    this._NgModel_0_7 = new import12.Wrapper_NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_0_6);
    this._NgControl_0_8 = this._NgModel_0_7.context;
    this._NgControlStatus_0_9 = new import13.Wrapper_NgControlStatus(this._NgControl_0_8);
    var disposable_0:Function = this.renderer.listen(this._el_0,'keydown',this.eventHandler(this._handle_keydown_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'ngModelChange',this.eventHandler(this._handle_ngModelChange_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'input',this.eventHandler(this._handle_input_0_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_0,'blur',this.eventHandler(this._handle_blur_0_3.bind(this)));
    const subscription_0:any = this._NgModel_0_7.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_0_1.bind(this)));
    this._viewQuery_input_0.reset([this._appEl_0.vcRef]);
    this.context.input = this._viewQuery_input_0.first;
    this.init(([] as any[]),[this._el_0],[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.DefaultValueAccessor) && (0 === requestNodeIndex))) { return this._DefaultValueAccessor_0_5.context; }
    if (((token === import16.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_6; }
    if (((token === import17.NgModel) && (0 === requestNodeIndex))) { return this._NgModel_0_7.context; }
    if (((token === import18.NgControl) && (0 === requestNodeIndex))) { return this._NgControl_0_8; }
    if (((token === import19.NgControlStatus) && (0 === requestNodeIndex))) { return this._NgControlStatus_0_9.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DefaultValueAccessor_0_5.detectChangesInInputProps(this,this._el_0,throwOnChange);
    const currVal_0_1_0:any = this.context.value;
    this._NgModel_0_7.check_model(currVal_0_1_0,throwOnChange,false);
    this._NgModel_0_7.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this._NgControlStatus_0_9.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._DefaultValueAccessor_0_5.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this._NgModel_0_7.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this._NgControlStatus_0_9.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_0_7.context.ngOnDestroy();
  }
  private _handle_keydown_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this.context.onKeyDown($event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_ngModelChange_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>(this.context.value = $event)) !== false);
    return (true && pd_0_0);
  }
  private _handle_input_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DefaultValueAccessor_0_5.context.onChange($event.target.value)) !== false);
    return (true && pd_0_0);
  }
  private _handle_blur_0_3($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._DefaultValueAccessor_0_5.context.onTouched()) !== false);
    return (true && pd_0_0);
  }
}
export function viewFactory_NumericEditorComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.NumericEditorComponent> {
  if ((renderType_NumericEditorComponent === (null as any))) { (renderType_NumericEditorComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_NumericEditorComponent,{})); }
  return new _View_NumericEditorComponent0(viewUtils,parentInjector,declarationEl);
}