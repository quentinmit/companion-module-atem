import { AtemState, SettingsState, VideoState } from 'atem-connection'

export function getME(state: AtemState, meIndex: number | string): VideoState.MixEffect | undefined {
  return state.video.ME[meIndex as number]
}
export function getUSK(
  state: AtemState,
  meIndex: number | string,
  keyIndex: number | string
): VideoState.USK.UpstreamKeyer | undefined {
  return getME(state, meIndex)?.upstreamKeyers[keyIndex as number]
}
export function getDSK(state: AtemState, keyIndex: number | string): VideoState.DSK.DownstreamKeyer | undefined {
  return state.video.downstreamKeyers[keyIndex as number]
}
export function getSuperSourceBox(state: AtemState, boxIndex: number | string, ssrcId?: number | string) {
  return state.video.superSources[(ssrcId || 0) as number]?.boxes[boxIndex as number]
}
export function getMultiviewer(state: AtemState, index: number | string): SettingsState.MultiViewer | undefined {
  return state.settings.multiViewers[index as number]
}
export function getMultiviewerWindow(state: AtemState, mvIndex: number | string, windowIndex: number | string) {
  return getMultiviewer(state, mvIndex)?.windows[windowIndex as number]
}
