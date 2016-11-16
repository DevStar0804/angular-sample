/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/editor-component.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from 'ag-grid-ng2/lib/agGridNg2';
import * as import10 from '../node_modules/ag-grid-ng2/lib/agGridNg2.ngfactory';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/core/src/linker/element_ref';
import * as import13 from 'ag-grid-ng2/lib/ng2FrameworkFactory';
export var Wrapper_EditorComponent = (function () {
    function Wrapper_EditorComponent() {
        this._changed = false;
        this.context = new import0.EditorComponent();
    }
    Wrapper_EditorComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_EditorComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_EditorComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_EditorComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_EditorComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_EditorComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_EditorComponent;
}());
var renderType_EditorComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_EditorComponent_Host0 = (function (_super) {
    __extends(View_EditorComponent_Host0, _super);
    function View_EditorComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_EditorComponent_Host0, renderType_EditorComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_EditorComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ag-editor-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_EditorComponent0(this.viewUtils, this, 0, this._el_0);
        this._EditorComponent_0_3 = new Wrapper_EditorComponent();
        this.compView_0.create(this._EditorComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._EditorComponent_0_3.context);
    };
    View_EditorComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.EditorComponent) && (0 === requestNodeIndex))) {
            return this._EditorComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_EditorComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._EditorComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_EditorComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_EditorComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_EditorComponent_Host0;
}(import1.AppView));
export var EditorComponentNgFactory = new import7.ComponentFactory('ag-editor-component', View_EditorComponent_Host0, import0.EditorComponent);
var styles_EditorComponent = [];
var renderType_EditorComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_EditorComponent, {});
export var View_EditorComponent0 = (function (_super) {
    __extends(View_EditorComponent0, _super);
    function View_EditorComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_EditorComponent0, renderType_EditorComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_EditorComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'style', 'width: 500px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Using Cell Editor Components', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'ag-grid-ng2', new import3.InlineArray4(4, 'class', 'ag-fresh', 'style', 'width: 100%; height: 200px;'), null);
        this._vc_5 = new import8.ViewContainer(5, 0, this, this._el_5);
        this.compView_5 = new import10.View_AgGridNg20(this.viewUtils, this, 5, this._el_5);
        this._AgGridNg2_5_5 = new import10.Wrapper_AgGridNg2(new import12.ElementRef(this._el_5), this._vc_5.vcRef, this.parentView.injectorGet(import13.Ng2FrameworkFactory, this.parentIndex));
        this._query_AgGridColumn_5_0 = new import11.QueryList();
        this._text_6 = this.renderer.createText(null, '\n    ', null);
        this.compView_5.create(this._AgGridNg2_5_5.context);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ]), null);
        return null;
    };
    View_EditorComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import9.AgGridNg2) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._AgGridNg2_5_5.context;
        }
        return notFoundResult;
    };
    View_EditorComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5_0_0 = this.context.gridOptions;
        this._AgGridNg2_5_5.check_gridOptions(currVal_5_0_0, throwOnChange, false);
        this._AgGridNg2_5_5.ngDoCheck(this, this._el_5, throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._query_AgGridColumn_5_0.dirty) {
                this._query_AgGridColumn_5_0.reset([]);
                this._AgGridNg2_5_5.context.columns = this._query_AgGridColumn_5_0;
                this._query_AgGridColumn_5_0.notifyOnChanges();
            }
        }
        this.compView_5.detectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._AgGridNg2_5_5.context.ngAfterViewInit();
            }
        }
    };
    View_EditorComponent0.prototype.destroyInternal = function () {
        this._vc_5.destroyNestedViews();
        this.compView_5.destroy();
        this._AgGridNg2_5_5.ngOnDestroy();
    };
    return View_EditorComponent0;
}(import1.AppView));
//# sourceMappingURL=editor-component.component.ngfactory.js.map