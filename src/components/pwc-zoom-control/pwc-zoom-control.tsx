import { Component, h, Element, Listen, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "pwc-zoom-control",
  styleUrl: "pwc-zoom-control.scss",
  shadow: true,
})
export class PwcZoomControl {
  @Element() element: HTMLElement;
  @Prop() zoomStep: string = "1";
  @Prop() zoomRangeStep: string = "0.1";
  @Prop() zoom: string = "10";
  @Prop() maxZoom: string = "18";
  @Prop() minZoom: string = "1";

  @Listen('click', { capture: true })
  handleClick(ev) {
    const controlID = ev.composedPath()[0].getAttribute("id");
    const controlValue = ev.composedPath()[0].value;
    this.onControlClicked(controlID, controlValue);
  }

  @Event() controlTriggered: EventEmitter;
  controlTriggeredHandler(type, value) {
    this.controlTriggered.emit({ type, value });
  }

  onControlClicked(controlID, value) {
    let controlValue = value;
    switch (controlID) {
      case 'panTop':
        break;
      case 'panRight':
        break;
      case 'panBottom':
        break;
      case 'panLeft':
        break;
      case 'zoomRange':
        this.zoom = value;
        break;
      case 'zoomIn':
        if (parseFloat(this.zoom) < parseFloat(this.maxZoom)) {
          this.zoom = (parseFloat(this.zoom) + parseFloat(this.zoomStep)).toString();
          controlValue = this.zoom;
        }
        break;
      case 'zoomOut':
        if (parseFloat(this.zoom) > parseFloat(this.minZoom)) {
          this.zoom = (parseFloat(this.zoom) - parseFloat(this.zoomStep)).toString();
          controlValue = this.zoom;
        }
        break;
    }

    this.controlTriggeredHandler(controlID, controlValue);
  }

  render() {
    return (
      <div id="mapControls">
        <div id="mapZoom">
          <div id="zoomIn" class="zoom-control" title="Zoom in the view"></div>
          <div id="zoomOut" class="zoom-control" title="Zoom out the view"></div>
          <input
            type="range" name="zoomRange" id="zoomRange" min={this.minZoom} max={this.maxZoom} step={this.zoomRangeStep} value={this.zoom} />
        </div>
        <div id="mapPan">
          <div class="pan-split" id="panSplitVert"></div>
          <div class="pan-split" id="panSplitHoriz"></div>
          <div id="panCentre"></div>
          <div class="pan-arrow" id="panTop" title="Pan view to the top"></div>
          <div class="pan-arrow" id="panRight" title="Pan view to the right"></div>
          <div class="pan-arrow" id="panBottom" title="Pan view to the bottom"></div>
          <div class="pan-arrow" id="panLeft" title="Pan view to the left"></div>
        </div>
      </div>
    );
  }
}
