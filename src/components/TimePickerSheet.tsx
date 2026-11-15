import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { TimeOfDay } from '@/state/onboarding-model';
import { colors, radii, sizes, space } from '@/theme/tokens';

import { AppText } from './AppText';

export function timeToDate({ hour, minute }: TimeOfDay): Date {
  const d = new Date();
  d.setHours(hour, minute, 0, 0);
  return d;
}

export function dateToTime(d: Date): TimeOfDay {
  return { hour: d.getHours(), minute: d.getMinutes() };
}

interface TimePickerSheetProps {
  visible: boolean;
  value: TimeOfDay;
  onConfirm: (time: TimeOfDay) => void;
  onClose: () => void;
}

/** iOS bottom sheet with a spinner time picker. (Android uses the native dialog instead.) */
export function TimePickerSheet({ visible, value, onConfirm, onClose }: TimePickerSheetProps) {
  const insets = useSafeAreaInsets();
  const [draft, setDraft] = useState(() => timeToDate(value));

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      onShow={() => setDraft(timeToDate(value))}
    >
      <Pressable style={styles.backdrop} onPress={onClose} accessibilityLabel="Close time picker" />
      <View style={[styles.sheet, { paddingBottom: insets.bottom + space.lg }]}>
        <View style={styles.bar}>
          <Pressable onPress={onClose} hitSlop={sizes.hitSlop} accessibilityRole="button">
            <AppText variant="label" style={{ color: colors.inkMuted }}>
              Cancel
            </AppText>
          </Pressable>
          <AppText variant="title">Preferred time</AppText>
          <Pressable
            onPress={() => {
              onConfirm(dateToTime(draft));
              onClose();
            }}
            hitSlop={sizes.hitSlop}
            accessibilityRole="button"
          >
            <AppText variant="title">Done</AppText>
          </Pressable>
        </View>
        <DateTimePicker
          value={draft}
          mode="time"
          display="spinner"
          themeVariant="light"
          textColor={colors.ink}
          onValueChange={(_, date) => setDraft(date)}
          style={styles.picker}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(17,17,17,0.35)' },
  sheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radii.block,
    borderTopRightRadius: radii.block,
    paddingTop: space.md,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizes.gutter,
    paddingVertical: space.sm,
  },
  picker: { alignSelf: 'center' },
});
