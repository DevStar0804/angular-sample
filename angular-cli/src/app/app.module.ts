import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
// application
import {AppComponent} from "./app.component";
// rich grid
import {RichGridComponent} from "./rich-grid-example/rich-grid.component";
// declarative
import {RichGridDeclarativeComponent} from "./rich-grid-declarative-example/rich-grid-declarative.component";
// rich grid and rich grid declarative
import {DateComponent} from "./date-component/date.component";
import {HeaderComponent} from "./header-component/header.component";
import {HeaderGroupComponent} from "./header-group-component/header-group.component";
// from component
import {DynamicComponent} from "./dynamic-component-example/dynamic.component";
import {SquareComponent} from "./dynamic-component-example/square.component";
import {ParamsComponent} from "./dynamic-component-example/params.component";
import {CubeComponent} from "./dynamic-component-example/cube.component";
import {CurrencyComponent} from "./dynamic-component-example/currency.component";
import {ChildMessageComponent} from "./dynamic-component-example/child-message.component";
// from rich component
import {RichComponent} from "./rich-dynamic-component-example/rich.component";
import {ClickableModule} from "./rich-dynamic-component-example/clickable.module";
import {RatioModule} from "./rich-dynamic-component-example/ratio.module";
import {RatioParentComponent} from "./rich-dynamic-component-example/ratio.parent.component";
import {ClickableParentComponent} from "./rich-dynamic-component-example/clickable.parent.component";
// editor
import {EditorComponent} from "./editor-component-example/editor.component";
import {NumericEditorComponent} from "./editor-component-example/numeric-editor.component";
import {MoodEditorComponent} from "./editor-component-example/mood-editor.component";
import {MoodRendererComponent} from "./editor-component-example/mood-renderer.component";
// floating row
import {FloatingRowComponent} from "./floating-row-example/floating-row-renderer.component";
import {StyledComponent} from "./floating-row-example/styled-renderer.component";
// full width
import {FullWidthComponent} from "./full-width-example/full-width-renderer.component";
import {NameAndAgeRendererComponent} from "./full-width-example/name-age-renderer.component";
// grouped inner
import {MedalRendererComponent} from "./grouped-row-example/medal-renderer.component";
import {GroupRowComponent} from "./grouped-row-example/group-row-renderer.component";
// filter
import {FilterComponentComponent} from "./filter-component-example/filter.component";
import {PartialMatchFilterComponent} from "./filter-component-example/partial-match-filter.component";
// master detail
import {MasterComponent} from "./master-detail-example/masterdetail-master.component";
import {DetailPanelComponent} from "./master-detail-example/detail-panel.component";

const appRoutes: Routes = [
    {path: 'rich-grid', component: RichGridComponent, data: {title: "Rich Grid with Pure JavaScript"}},
    {
        path: 'rich-grid-declarative',
        component: RichGridDeclarativeComponent,
        data: {title: "Rich Grid with Declarative Markup"}
    },
    {path: 'from-component', component: DynamicComponent, data: {title: "Dynamic Component Example"}},
    {path: 'from-rich-component', component: RichComponent, data: {title: "Dynamic Component - Richer Example"}},
    {path: 'editor-component', component: EditorComponent, data: {title: "Cell Editor Component Example"}},
    {path: 'floating-row', component: FloatingRowComponent, data: {title: "Floating Row Renderer Example"}},
    {path: 'full-width', component: FullWidthComponent, data: {title: "Full Width Renderer Example"}},
    {path: 'group-row', component: GroupRowComponent, data: {title: "Group Row Renderer Example"}},
    {path: 'filter', component: FilterComponentComponent, data: {title: "Filters Component Example"}},
    {path: 'master-detail', component: MasterComponent, data: {title: "Master Detail Example"}},
    {path: '', redirectTo: 'rich-grid', pathMatch: 'full'}
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        AgGridModule.withComponents(
            [
                SquareComponent,
                CubeComponent,
                ParamsComponent,
                CurrencyComponent,
                ChildMessageComponent,
                RatioParentComponent,
                ClickableParentComponent,
                NumericEditorComponent,
                MoodEditorComponent,
                MoodRendererComponent,
                StyledComponent,
                NameAndAgeRendererComponent,
                MedalRendererComponent,
                PartialMatchFilterComponent,
                DetailPanelComponent,
                DateComponent,
                HeaderComponent,
                HeaderGroupComponent
            ]),
        RatioModule,
        ClickableModule
    ],
    declarations: [
        AppComponent,
        RichGridComponent,
        DateComponent,
        HeaderComponent,
        HeaderGroupComponent,
        RichGridDeclarativeComponent,
        DynamicComponent,
        SquareComponent,
        CubeComponent,
        ParamsComponent,
        CurrencyComponent,
        ChildMessageComponent,
        RichComponent,
        EditorComponent,
        NumericEditorComponent,
        MoodEditorComponent,
        MoodRendererComponent,
        FloatingRowComponent,
        StyledComponent,
        FullWidthComponent,
        NameAndAgeRendererComponent,
        GroupRowComponent,
        MedalRendererComponent,
        FilterComponentComponent,
        PartialMatchFilterComponent,
        MasterComponent,
        DetailPanelComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
