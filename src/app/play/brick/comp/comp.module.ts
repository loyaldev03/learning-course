import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicModule } from 'ng-dynamic-component';
import { NgArrayPipesModule } from 'ngx-pipes';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragulaModule } from 'ng2-dragula';
import { MaterialModule } from '../../../material.module';
import { CompComponent } from './comp.component';
import { ImageComponent } from './comp_image.component';
import { MultipleChoiceComponent } from './comp_multiple_choice.component';
import { OrderComponent } from './comp_order.component';
import { SingleChoiceComponent } from './comp_single_choice.component';
import { SortComponent } from './comp_sort.component';
import { TextComponent } from './comp_text.component';
import { ShortAnswerComponent } from './comp_short_answer.component';
import { HorizontalShuffleComponent } from './comp_horizontal_shuffle.component';
import { TextHighlightingComponent } from './comp_text_highlighting.component';
import { HighlightDirective } from './highlight.directive';
import { ArrowComponent } from './comp_arrow.component';
import { ListComponent } from './comp_list.component';
import { RevealComponent } from './comp_reveal.component';

let dModule = DynamicModule.withComponents([SingleChoiceComponent, MultipleChoiceComponent, ImageComponent, 
    TextComponent, OrderComponent, SortComponent, ShortAnswerComponent, HorizontalShuffleComponent, 
    TextHighlightingComponent, ArrowComponent, ListComponent, RevealComponent])

@NgModule({
    imports: [ CommonModule, FormsModule, DragulaModule, MaterialModule, NgArrayPipesModule, FlexLayoutModule, dModule ],
    declarations: [ CompComponent, SingleChoiceComponent, MultipleChoiceComponent, ImageComponent, 
        TextComponent, OrderComponent, SortComponent, ShortAnswerComponent, HorizontalShuffleComponent, 
        TextHighlightingComponent, ArrowComponent, ListComponent, RevealComponent,
        HighlightDirective ],
    exports: [ CompComponent, SingleChoiceComponent, MultipleChoiceComponent, ImageComponent,
        TextComponent, OrderComponent, SortComponent, ShortAnswerComponent, HorizontalShuffleComponent,
        TextHighlightingComponent, ArrowComponent, ListComponent, RevealComponent,
        HighlightDirective,
        dModule.ngModule, FormsModule
    ],
    providers: [ dModule.providers ]
})
export class CompModule { }