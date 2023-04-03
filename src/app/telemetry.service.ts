import { Injectable, EventEmitter } from '@angular/core';
import { CsTelemetryModule } from '@project-sunbird/client-services/telemetry';
import { UtilService } from './util.service';
@Injectable({
  providedIn: 'root'
})
export class TelemetryService {

  private contentSessionId: string;
  private playSessionId: string;
  private telemetryObject: any;
  private context;
  public config;

  constructor(private utilService: UtilService) {
    this.contentSessionId = this.utilService.uniqueId();
  }

  public initialize({ context, config, metadata }) {
    this.context = context;
    this.config = config;
    this.playSessionId = this.utilService.uniqueId();

    if (!CsTelemetryModule.instance.isInitialised) {
      CsTelemetryModule.instance.init({});
      const telemetryConfig: any =  {
        config: {
          pdata: context.pdata,
          env: '',
          channel: context.channel,
          did: context.did,
          authtoken: context.authToken || '',
          uid: context.uid || '',
          sid: context.sid,
          batchsize: 10,
          mode: context.mode,
          host: '',
          apislug: '/telemetry',
          endpoint: '/upload',
          tags: context.tags,
          cdata: [{ id: this.contentSessionId, type: 'ContentSession' },
          { id: this.playSessionId, type: 'PlaySession' }]
        },
        userOrgDetails: {}
      };
      if (context.dispatcher) {
        telemetryConfig.config.dispatcher = context.dispatcher;
      }
      CsTelemetryModule.instance.telemetryService.initTelemetry(telemetryConfig);
    }

    this.telemetryObject = {
      id: metadata.identifier,
      type: 'Content',
      ver: metadata.pkgVersion + '' || '1.0',
      rollup: context.objectRollup || {}
    };
  }


  public start(duration) {
    CsTelemetryModule.instance.telemetryService.raiseStartTelemetry(
      {
        options: this.getEventOptions(),
        edata: { type: 'content', mode: 'play', pageid: '', duration: Number((duration / 1e3).toFixed(2)) }
      }
    );

  }

  public end() {
    CsTelemetryModule.instance.telemetryService.raiseEndTelemetry({
      edata: {
        type: 'content',
        mode: 'play',
        pageid: 'language-lab',
        summary: []
      },
      options: this.getEventOptions()
    });

  }

  public interact(id, currentPage) {
    CsTelemetryModule.instance.telemetryService.raiseInteractTelemetry({
      options: this.getEventOptions(),
      edata: { type: 'TOUCH', subtype: '', id, pageid: currentPage + '' }
    });
  }

  public search(id) {
    CsTelemetryModule.instance.telemetryService.raiseSearchTelemetry({
      options: this.getEventOptions(),
      edata: { // Required
        type: 'content', // Required. content, assessment, asset
        query: id, // Required. Search query string
        filters: {}, // Optional. Additional filters
        sort: {}, // Optional. Additional sort parameters
        correlationid: '', // Optional. Server generated correlation id (for mobile app's telemetry)
        size: 0, // Required. Number of search results
        topn: [{}] // Required. top N (configurable) results with their score
    }
    });
  }

  public impression(currentPage, uri) {
    CsTelemetryModule.instance.telemetryService.raiseImpressionTelemetry({
      options: this.getEventOptions(),
      edata: { type: 'workflow', subtype: '', pageid: currentPage + '', uri: uri}
    });
  }

  public error(error: any, data: { err: string, errtype: string }) {
    CsTelemetryModule.instance.telemetryService.raiseErrorTelemetry({
      options: this.getEventOptions(),
      edata: {
        err: data.err,
        errtype: data.errtype,
        stacktrace: error.toString() || ''
      }
    });
  }

  private getEventOptions() {
    return ({
      object: this.telemetryObject,
      context: {
        channel: this.context.channel,
        pdata: this.context.pdata,
        env: 'contentplayer',
        sid: this.context.sid,
        uid: this.context.uid,
        cdata: [{ id: this.contentSessionId, type: 'ContentSession' },
        { id: this.playSessionId, type: 'PlaySession' }],
        rollup: this.context.contextRollup || {}
      }
    });
  }

}
