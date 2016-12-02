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
import * as import0 from '../../app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import10 from '@angular/core/src/linker/template_ref';
import * as import11 from '@angular/common/src/directives/ng_if';
import * as import12 from '../../app/rich-grid.component';
import * as import13 from './rich-grid.component.ngfactory';
import * as import14 from '../../app/rich-grid-declarative.component';
import * as import15 from './rich-grid-declarative.component.ngfactory';
import * as import16 from '../../app/from-component.component';
import * as import17 from './from-component.component.ngfactory';
import * as import18 from '../../app/from-rich.component';
import * as import19 from './from-rich.component.ngfactory';
import * as import20 from '../../app/editor-component.component';
import * as import21 from './editor-component.component.ngfactory';
import * as import22 from '../../app/floating-row-renderer.component';
import * as import23 from './floating-row-renderer.component.ngfactory';
import * as import24 from '../../app/full-width-renderer.component';
import * as import25 from './full-width-renderer.component.ngfactory';
import * as import26 from '../../app/group-row-renderer.component';
import * as import27 from './group-row-renderer.component.ngfactory';
import * as import28 from '../../app/filter-component.component';
import * as import29 from './filter-component.component.ngfactory';
export var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent() {
        this._changed = false;
        this.context = new import0.AppComponent();
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
var renderType_AppComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'my-app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent();
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(import1.AppView));
export var AppComponentNgFactory = new import7.ComponentFactory('my-app', View_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [];
var renderType_AppComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AppComponent, {});
export var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import8.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import10.TemplateRef_(this, 0, this._anchor_0);
        this._NgIf_0_6 = new import9.Wrapper_NgIf(this._vc_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_2 = new import8.ViewContainer(2, null, this, this._anchor_2);
        this._TemplateRef_2_5 = new import10.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import9.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_4 = new import8.ViewContainer(4, null, this, this._anchor_4);
        this._TemplateRef_4_5 = new import10.TemplateRef_(this, 4, this._anchor_4);
        this._NgIf_4_6 = new import9.Wrapper_NgIf(this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_6 = new import8.ViewContainer(6, null, this, this._anchor_6);
        this._TemplateRef_6_5 = new import10.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import9.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_8 = new import8.ViewContainer(8, null, this, this._anchor_8);
        this._TemplateRef_8_5 = new import10.TemplateRef_(this, 8, this._anchor_8);
        this._NgIf_8_6 = new import9.Wrapper_NgIf(this._vc_8.vcRef, this._TemplateRef_8_5);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_10 = new import8.ViewContainer(10, null, this, this._anchor_10);
        this._TemplateRef_10_5 = new import10.TemplateRef_(this, 10, this._anchor_10);
        this._NgIf_10_6 = new import9.Wrapper_NgIf(this._vc_10.vcRef, this._TemplateRef_10_5);
        this._text_11 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_12 = new import8.ViewContainer(12, null, this, this._anchor_12);
        this._TemplateRef_12_5 = new import10.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import9.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_14 = new import8.ViewContainer(14, null, this, this._anchor_14);
        this._TemplateRef_14_5 = new import10.TemplateRef_(this, 14, this._anchor_14);
        this._NgIf_14_6 = new import9.Wrapper_NgIf(this._vc_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_16 = new import8.ViewContainer(16, null, this, this._anchor_16);
        this._TemplateRef_16_5 = new import10.TemplateRef_(this, 16, this._anchor_16);
        this._NgIf_16_6 = new import9.Wrapper_NgIf(this._vc_16.vcRef, this._TemplateRef_16_5);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._anchor_10,
            this._text_11,
            this._anchor_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._anchor_16,
            this._text_17
        ]), null);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import11.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        if (((token === import10.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import11.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        if (((token === import10.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import11.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === import10.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import11.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        if (((token === import10.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import11.NgIf) && (8 === requestNodeIndex))) {
            return this._NgIf_8_6.context;
        }
        if (((token === import10.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import11.NgIf) && (10 === requestNodeIndex))) {
            return this._NgIf_10_6.context;
        }
        if (((token === import10.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import11.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        if (((token === import10.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import11.NgIf) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6.context;
        }
        if (((token === import10.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import11.NgIf) && (16 === requestNodeIndex))) {
            return this._NgIf_16_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = (this.context.example == 'rich-grid');
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        var currVal_2_0_0 = (this.context.example == 'rich-grid-declarative');
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        var currVal_4_0_0 = (this.context.example == 'from-component');
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        var currVal_6_0_0 = (this.context.example == 'from-rich-component');
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        var currVal_8_0_0 = (this.context.example == 'editor-component');
        this._NgIf_8_6.check_ngIf(currVal_8_0_0, throwOnChange, false);
        this._NgIf_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        var currVal_10_0_0 = (this.context.example == 'floating-row');
        this._NgIf_10_6.check_ngIf(currVal_10_0_0, throwOnChange, false);
        this._NgIf_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        var currVal_12_0_0 = (this.context.example == 'full-width');
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        var currVal_14_0_0 = (this.context.example == 'group-row');
        this._NgIf_14_6.check_ngIf(currVal_14_0_0, throwOnChange, false);
        this._NgIf_14_6.ngDoCheck(this, this._anchor_14, throwOnChange);
        var currVal_16_0_0 = (this.context.example == 'filter-component');
        this._NgIf_16_6.check_ngIf(currVal_16_0_0, throwOnChange, false);
        this._NgIf_16_6.ngDoCheck(this, this._anchor_16, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        this._vc_14.detectChangesInNestedViews(throwOnChange);
        this._vc_16.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._vc_2.destroyNestedViews();
        this._vc_4.destroyNestedViews();
        this._vc_6.destroyNestedViews();
        this._vc_8.destroyNestedViews();
        this._vc_10.destroyNestedViews();
        this._vc_12.destroyNestedViews();
        this._vc_14.destroyNestedViews();
        this._vc_16.destroyNestedViews();
    };
    View_AppComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_AppComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        if ((nodeIndex == 2)) {
            return new View_AppComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        if ((nodeIndex == 4)) {
            return new View_AppComponent3(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        if ((nodeIndex == 6)) {
            return new View_AppComponent4(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        if ((nodeIndex == 8)) {
            return new View_AppComponent5(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        if ((nodeIndex == 10)) {
            return new View_AppComponent6(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        if ((nodeIndex == 12)) {
            return new View_AppComponent7(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        if ((nodeIndex == 14)) {
            return new View_AppComponent8(this.viewUtils, this, 14, this._anchor_14, this._vc_14);
        }
        if ((nodeIndex == 16)) {
            return new View_AppComponent9(this.viewUtils, this, 16, this._anchor_16, this._vc_16);
        }
        return null;
    };
    return View_AppComponent0;
}(import1.AppView));
var View_AppComponent1 = (function (_super) {
    __extends(View_AppComponent1, _super);
    function View_AppComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent1, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'rich-grid', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import13.View_RichGridComponent0(this.viewUtils, this, 2, this._el_2);
        this._RichGridComponent_2_3 = new import13.Wrapper_RichGridComponent();
        this.compView_2.create(this._RichGridComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.RichGridComponent) && (2 === requestNodeIndex))) {
            return this._RichGridComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        this._RichGridComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.detectChanges(throwOnChange);
    };
    View_AppComponent1.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_AppComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent1;
}(import1.AppView));
var View_AppComponent2 = (function (_super) {
    __extends(View_AppComponent2, _super);
    function View_AppComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent2, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ag-rich-grid-declarative', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import15.View_RichGridDeclarativeComponent0(this.viewUtils, this, 2, this._el_2);
        this._RichGridDeclarativeComponent_2_3 = new import15.Wrapper_RichGridDeclarativeComponent();
        this.compView_2.create(this._RichGridDeclarativeComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RichGridDeclarativeComponent) && (2 === requestNodeIndex))) {
            return this._RichGridDeclarativeComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this._RichGridDeclarativeComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.detectChanges(throwOnChange);
    };
    View_AppComponent2.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_AppComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent2;
}(import1.AppView));
var View_AppComponent3 = (function (_super) {
    __extends(View_AppComponent3, _super);
    function View_AppComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent3, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ag-from-component', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import17.View_FromComponentComponent0(this.viewUtils, this, 2, this._el_2);
        this._FromComponentComponent_2_3 = new import17.Wrapper_FromComponentComponent();
        this.compView_2.create(this._FromComponentComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.FromComponentComponent) && (2 === requestNodeIndex))) {
            return this._FromComponentComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        this._FromComponentComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.detectChanges(throwOnChange);
    };
    View_AppComponent3.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_AppComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent3;
}(import1.AppView));
var View_AppComponent4 = (function (_super) {
    __extends(View_AppComponent4, _super);
    function View_AppComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent4, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ag-from-rich-component', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import19.View_FromRichComponent0(this.viewUtils, this, 2, this._el_2);
        this._FromRichComponent_2_3 = new import19.Wrapper_FromRichComponent();
        this.compView_2.create(this._FromRichComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.FromRichComponent) && (2 === requestNodeIndex))) {
            return this._FromRichComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        this._FromRichComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.detectChanges(throwOnChange);
    };
    View_AppComponent4.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_AppComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent4;
}(import1.AppView));
var View_AppComponent5 = (function (_super) {
    __extends(View_AppComponent5, _super);
    function View_AppComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent5, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ag-editor-component', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import21.View_EditorComponent0(this.viewUtils, this, 2, this._el_2);
        this._EditorComponent_2_3 = new import21.Wrapper_EditorComponent();
        this.compView_2.create(this._EditorComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.EditorComponent) && (2 === requestNodeIndex))) {
            return this._EditorComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        this._EditorComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.detectChanges(throwOnChange);
    };
    View_AppComponent5.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_AppComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent5;
}(import1.AppView));
var View_AppComponent6 = (function (_super) {
    __extends(View_AppComponent6, _super);
    function View_AppComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent6, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ag-floating-row-renderer-component', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import23.View_WithFloatingRowComponent0(this.viewUtils, this, 2, this._el_2);
        this._WithFloatingRowComponent_2_3 = new import23.Wrapper_WithFloatingRowComponent();
        this.compView_2.create(this._WithFloatingRowComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.WithFloatingRowComponent) && (2 === requestNodeIndex))) {
            return this._WithFloatingRowComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        this._WithFloatingRowComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.detectChanges(throwOnChange);
    };
    View_AppComponent6.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_AppComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent6;
}(import1.AppView));
var View_AppComponent7 = (function (_super) {
    __extends(View_AppComponent7, _super);
    function View_AppComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent7, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ag-full-width-renderer-component', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import25.View_WithFullWidthComponent0(this.viewUtils, this, 2, this._el_2);
        this._WithFullWidthComponent_2_3 = new import25.Wrapper_WithFullWidthComponent();
        this.compView_2.create(this._WithFullWidthComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.WithFullWidthComponent) && (2 === requestNodeIndex))) {
            return this._WithFullWidthComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        this._WithFullWidthComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.detectChanges(throwOnChange);
    };
    View_AppComponent7.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_AppComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent7;
}(import1.AppView));
var View_AppComponent8 = (function (_super) {
    __extends(View_AppComponent8, _super);
    function View_AppComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent8, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ag-group-row-renderer-component', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import27.View_WithGroupRowComponent0(this.viewUtils, this, 2, this._el_2);
        this._WithGroupRowComponent_2_3 = new import27.Wrapper_WithGroupRowComponent();
        this.compView_2.create(this._WithGroupRowComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent8.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import26.WithGroupRowComponent) && (2 === requestNodeIndex))) {
            return this._WithGroupRowComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        this._WithGroupRowComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.detectChanges(throwOnChange);
    };
    View_AppComponent8.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_AppComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent8;
}(import1.AppView));
var View_AppComponent9 = (function (_super) {
    __extends(View_AppComponent9, _super);
    function View_AppComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent9, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ag-filter-component', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import29.View_FilterComponentComponent0(this.viewUtils, this, 2, this._el_2);
        this._FilterComponentComponent_2_3 = new import29.Wrapper_FilterComponentComponent();
        this.compView_2.create(this._FilterComponentComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent9.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.FilterComponentComponent) && (2 === requestNodeIndex))) {
            return this._FilterComponentComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        this._FilterComponentComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.detectChanges(throwOnChange);
    };
    View_AppComponent9.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_AppComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent9;
}(import1.AppView));
//# sourceMappingURL=app.component.ngfactory.js.map