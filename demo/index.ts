import { Router, createRouter, fdFor, fdIf, fdValue, generateNode } from "../src";

import { createCounter } from "./simple_counter/counter";
import { createCounters } from "./simple_counters_one_input/counters";
import { createExampleAttr } from "./attrs/attrs";
import { createExampleRouter } from "./router/router";
import { createIf } from "./simple_if/if";
import { createObsFor } from "./for_obs/for_obs";
import { createSimpleFor } from "./simple_for/for";
import { createSimpleForContainer } from "./simple_for_component/forComponent";
import { createStyles } from "./styles/styles";
import { createTextNode } from "./textNode/textNode";
import { createTimer } from "./timer/timer";
import { createTodo } from "./todo/todo";

const simpleStyle = document.getElementById("styles")
simpleStyle.appendChild(generateNode(createStyles()))

const simpleTodo = document.getElementById("todo")
simpleTodo.appendChild(generateNode(createTodo()))

const simpleTimerConainer = document.getElementById("timer")
simpleTimerConainer.appendChild(generateNode(createTimer()))

const simpleCounterConainer = document.getElementById("counter")
simpleCounterConainer.appendChild(generateNode(createCounter()))
simpleCounterConainer.appendChild(generateNode(createCounter()))

const simpleCounterSharedConainer = document.getElementById("counter_input")
const sharedValue = fdValue(0);
simpleCounterSharedConainer.appendChild(generateNode(createCounters({counter: sharedValue})))
simpleCounterSharedConainer.appendChild(generateNode(createCounters({counter: sharedValue})))
simpleCounterSharedConainer.appendChild(generateNode(createCounters({counter: sharedValue})))

const simpleIfConainer = document.getElementById("simple_if")
simpleIfConainer.appendChild(generateNode(createIf()))

const simpleForConainer = document.getElementById("simple_for")
simpleForConainer.appendChild(generateNode(createSimpleFor()))


const simpleForComponentConainer = document.getElementById("simple_for_component")
simpleForComponentConainer.appendChild(generateNode(createSimpleForContainer()))

const obsForComponentConainer = document.getElementById("simple_for_obs")
obsForComponentConainer.appendChild(generateNode(createObsFor()))

const attrsComponentConainer = document.getElementById("attrs")
attrsComponentConainer.appendChild(generateNode(createExampleAttr()))

const textNodeComponentConainer = document.getElementById("text_node")
textNodeComponentConainer.appendChild(generateNode(createTextNode()))

const routerConainer = document.getElementById("router")
routerConainer.appendChild(generateNode(createExampleRouter()))