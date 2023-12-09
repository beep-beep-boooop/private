(function(exports,metro,common,patcher,plugin,toasts,_vendetta,alerts,assets,utils,ui,components,storage){'use strict';var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}var pako$1 = {exports: {}};(function(module, exports) {
  /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
  !function(t, e) {
    e(exports) ;
  }(commonjsGlobal, function(t) {
    function e(t2) {
      let e2 = t2.length;
      for (; --e2 >= 0; )
        t2[e2] = 0;
    }
    const a = 256, i = 286, n = 30, s = 15, r = new Uint8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      0
    ]), o = new Uint8Array([
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13
    ]), l = new Uint8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      3,
      7
    ]), h = new Uint8Array([
      16,
      17,
      18,
      0,
      8,
      7,
      9,
      6,
      10,
      5,
      11,
      4,
      12,
      3,
      13,
      2,
      14,
      1,
      15
    ]), d = new Array(576);
    e(d);
    const _ = new Array(60);
    e(_);
    const f = new Array(512);
    e(f);
    const u = new Array(256);
    e(u);
    const c = new Array(29);
    e(c);
    const w = new Array(n);
    function b(t2, e2, a2, i2, n2) {
      this.static_tree = t2, this.extra_bits = e2, this.extra_base = a2, this.elems = i2, this.max_length = n2, this.has_stree = t2 && t2.length;
    }
    let m, g, p;
    function k(t2, e2) {
      this.dyn_tree = t2, this.max_code = 0, this.stat_desc = e2;
    }
    e(w);
    const v = function(t2) {
      return t2 < 256 ? f[t2] : f[256 + (t2 >>> 7)];
    }, y = function(t2, e2) {
      t2.pending_buf[t2.pending++] = 255 & e2, t2.pending_buf[t2.pending++] = e2 >>> 8 & 255;
    }, x = function(t2, e2, a2) {
      t2.bi_valid > 16 - a2 ? (t2.bi_buf |= e2 << t2.bi_valid & 65535, y(t2, t2.bi_buf), t2.bi_buf = e2 >> 16 - t2.bi_valid, t2.bi_valid += a2 - 16) : (t2.bi_buf |= e2 << t2.bi_valid & 65535, t2.bi_valid += a2);
    }, z = function(t2, e2, a2) {
      x(t2, a2[2 * e2], a2[2 * e2 + 1]);
    }, A = function(t2, e2) {
      let a2 = 0;
      do {
        a2 |= 1 & t2, t2 >>>= 1, a2 <<= 1;
      } while (--e2 > 0);
      return a2 >>> 1;
    }, E = function(t2, e2, a2) {
      const i2 = new Array(16);
      let n2, r2, o2 = 0;
      for (n2 = 1; n2 <= s; n2++)
        o2 = o2 + a2[n2 - 1] << 1, i2[n2] = o2;
      for (r2 = 0; r2 <= e2; r2++) {
        let e3 = t2[2 * r2 + 1];
        0 !== e3 && (t2[2 * r2] = A(i2[e3]++, e3));
      }
    }, R = function(t2) {
      let e2;
      for (e2 = 0; e2 < i; e2++)
        t2.dyn_ltree[2 * e2] = 0;
      for (e2 = 0; e2 < n; e2++)
        t2.dyn_dtree[2 * e2] = 0;
      for (e2 = 0; e2 < 19; e2++)
        t2.bl_tree[2 * e2] = 0;
      t2.dyn_ltree[512] = 1, t2.opt_len = t2.static_len = 0, t2.sym_next = t2.matches = 0;
    }, Z = function(t2) {
      t2.bi_valid > 8 ? y(t2, t2.bi_buf) : t2.bi_valid > 0 && (t2.pending_buf[t2.pending++] = t2.bi_buf), t2.bi_buf = 0, t2.bi_valid = 0;
    }, U = function(t2, e2, a2, i2) {
      const n2 = 2 * e2, s2 = 2 * a2;
      return t2[n2] < t2[s2] || t2[n2] === t2[s2] && i2[e2] <= i2[a2];
    }, S = function(t2, e2, a2) {
      const i2 = t2.heap[a2];
      let n2 = a2 << 1;
      for (; n2 <= t2.heap_len && (n2 < t2.heap_len && U(e2, t2.heap[n2 + 1], t2.heap[n2], t2.depth) && n2++, !U(e2, i2, t2.heap[n2], t2.depth)); )
        t2.heap[a2] = t2.heap[n2], a2 = n2, n2 <<= 1;
      t2.heap[a2] = i2;
    }, D = function(t2, e2, i2) {
      let n2, s2, l2, h2, d2 = 0;
      if (0 !== t2.sym_next)
        do {
          n2 = 255 & t2.pending_buf[t2.sym_buf + d2++], n2 += (255 & t2.pending_buf[t2.sym_buf + d2++]) << 8, s2 = t2.pending_buf[t2.sym_buf + d2++], 0 === n2 ? z(t2, s2, e2) : (l2 = u[s2], z(t2, l2 + a + 1, e2), h2 = r[l2], 0 !== h2 && (s2 -= c[l2], x(t2, s2, h2)), n2--, l2 = v(n2), z(t2, l2, i2), h2 = o[l2], 0 !== h2 && (n2 -= w[l2], x(t2, n2, h2)));
        } while (d2 < t2.sym_next);
      z(t2, 256, e2);
    }, T = function(t2, e2) {
      const a2 = e2.dyn_tree, i2 = e2.stat_desc.static_tree, n2 = e2.stat_desc.has_stree, r2 = e2.stat_desc.elems;
      let o2, l2, h2, d2 = -1;
      for (t2.heap_len = 0, t2.heap_max = 573, o2 = 0; o2 < r2; o2++)
        0 !== a2[2 * o2] ? (t2.heap[++t2.heap_len] = d2 = o2, t2.depth[o2] = 0) : a2[2 * o2 + 1] = 0;
      for (; t2.heap_len < 2; )
        h2 = t2.heap[++t2.heap_len] = d2 < 2 ? ++d2 : 0, a2[2 * h2] = 1, t2.depth[h2] = 0, t2.opt_len--, n2 && (t2.static_len -= i2[2 * h2 + 1]);
      for (e2.max_code = d2, o2 = t2.heap_len >> 1; o2 >= 1; o2--)
        S(t2, a2, o2);
      h2 = r2;
      do {
        o2 = t2.heap[1], t2.heap[1] = t2.heap[t2.heap_len--], S(t2, a2, 1), l2 = t2.heap[1], t2.heap[--t2.heap_max] = o2, t2.heap[--t2.heap_max] = l2, a2[2 * h2] = a2[2 * o2] + a2[2 * l2], t2.depth[h2] = (t2.depth[o2] >= t2.depth[l2] ? t2.depth[o2] : t2.depth[l2]) + 1, a2[2 * o2 + 1] = a2[2 * l2 + 1] = h2, t2.heap[1] = h2++, S(t2, a2, 1);
      } while (t2.heap_len >= 2);
      t2.heap[--t2.heap_max] = t2.heap[1], function(t3, e3) {
        const a3 = e3.dyn_tree, i3 = e3.max_code, n3 = e3.stat_desc.static_tree, r3 = e3.stat_desc.has_stree, o3 = e3.stat_desc.extra_bits, l3 = e3.stat_desc.extra_base, h3 = e3.stat_desc.max_length;
        let d3, _2, f2, u2, c2, w2, b2 = 0;
        for (u2 = 0; u2 <= s; u2++)
          t3.bl_count[u2] = 0;
        for (a3[2 * t3.heap[t3.heap_max] + 1] = 0, d3 = t3.heap_max + 1; d3 < 573; d3++)
          _2 = t3.heap[d3], u2 = a3[2 * a3[2 * _2 + 1] + 1] + 1, u2 > h3 && (u2 = h3, b2++), a3[2 * _2 + 1] = u2, _2 > i3 || (t3.bl_count[u2]++, c2 = 0, _2 >= l3 && (c2 = o3[_2 - l3]), w2 = a3[2 * _2], t3.opt_len += w2 * (u2 + c2), r3 && (t3.static_len += w2 * (n3[2 * _2 + 1] + c2)));
        if (0 !== b2) {
          do {
            for (u2 = h3 - 1; 0 === t3.bl_count[u2]; )
              u2--;
            t3.bl_count[u2]--, t3.bl_count[u2 + 1] += 2, t3.bl_count[h3]--, b2 -= 2;
          } while (b2 > 0);
          for (u2 = h3; 0 !== u2; u2--)
            for (_2 = t3.bl_count[u2]; 0 !== _2; )
              f2 = t3.heap[--d3], f2 > i3 || (a3[2 * f2 + 1] !== u2 && (t3.opt_len += (u2 - a3[2 * f2 + 1]) * a3[2 * f2], a3[2 * f2 + 1] = u2), _2--);
        }
      }(t2, e2), E(a2, d2, t2.bl_count);
    }, O = function(t2, e2, a2) {
      let i2, n2, s2 = -1, r2 = e2[1], o2 = 0, l2 = 7, h2 = 4;
      for (0 === r2 && (l2 = 138, h2 = 3), e2[2 * (a2 + 1) + 1] = 65535, i2 = 0; i2 <= a2; i2++)
        n2 = r2, r2 = e2[2 * (i2 + 1) + 1], ++o2 < l2 && n2 === r2 || (o2 < h2 ? t2.bl_tree[2 * n2] += o2 : 0 !== n2 ? (n2 !== s2 && t2.bl_tree[2 * n2]++, t2.bl_tree[32]++) : o2 <= 10 ? t2.bl_tree[34]++ : t2.bl_tree[36]++, o2 = 0, s2 = n2, 0 === r2 ? (l2 = 138, h2 = 3) : n2 === r2 ? (l2 = 6, h2 = 3) : (l2 = 7, h2 = 4));
    }, I = function(t2, e2, a2) {
      let i2, n2, s2 = -1, r2 = e2[1], o2 = 0, l2 = 7, h2 = 4;
      for (0 === r2 && (l2 = 138, h2 = 3), i2 = 0; i2 <= a2; i2++)
        if (n2 = r2, r2 = e2[2 * (i2 + 1) + 1], !(++o2 < l2 && n2 === r2)) {
          if (o2 < h2)
            do {
              z(t2, n2, t2.bl_tree);
            } while (0 != --o2);
          else
            0 !== n2 ? (n2 !== s2 && (z(t2, n2, t2.bl_tree), o2--), z(t2, 16, t2.bl_tree), x(t2, o2 - 3, 2)) : o2 <= 10 ? (z(t2, 17, t2.bl_tree), x(t2, o2 - 3, 3)) : (z(t2, 18, t2.bl_tree), x(t2, o2 - 11, 7));
          o2 = 0, s2 = n2, 0 === r2 ? (l2 = 138, h2 = 3) : n2 === r2 ? (l2 = 6, h2 = 3) : (l2 = 7, h2 = 4);
        }
    };
    let F = false;
    const L = function(t2, e2, a2, i2) {
      x(t2, 0 + (i2 ? 1 : 0), 3), Z(t2), y(t2, a2), y(t2, ~a2), a2 && t2.pending_buf.set(t2.window.subarray(e2, e2 + a2), t2.pending), t2.pending += a2;
    };
    var N = function(t2, e2, i2, n2) {
      let s2, r2, o2 = 0;
      t2.level > 0 ? (2 === t2.strm.data_type && (t2.strm.data_type = function(t3) {
        let e3, i3 = 4093624447;
        for (e3 = 0; e3 <= 31; e3++, i3 >>>= 1)
          if (1 & i3 && 0 !== t3.dyn_ltree[2 * e3])
            return 0;
        if (0 !== t3.dyn_ltree[18] || 0 !== t3.dyn_ltree[20] || 0 !== t3.dyn_ltree[26])
          return 1;
        for (e3 = 32; e3 < a; e3++)
          if (0 !== t3.dyn_ltree[2 * e3])
            return 1;
        return 0;
      }(t2)), T(t2, t2.l_desc), T(t2, t2.d_desc), o2 = function(t3) {
        let e3;
        for (O(t3, t3.dyn_ltree, t3.l_desc.max_code), O(t3, t3.dyn_dtree, t3.d_desc.max_code), T(t3, t3.bl_desc), e3 = 18; e3 >= 3 && 0 === t3.bl_tree[2 * h[e3] + 1]; e3--)
          ;
        return t3.opt_len += 3 * (e3 + 1) + 5 + 5 + 4, e3;
      }(t2), s2 = t2.opt_len + 3 + 7 >>> 3, r2 = t2.static_len + 3 + 7 >>> 3, r2 <= s2 && (s2 = r2)) : s2 = r2 = i2 + 5, i2 + 4 <= s2 && -1 !== e2 ? L(t2, e2, i2, n2) : 4 === t2.strategy || r2 === s2 ? (x(t2, 2 + (n2 ? 1 : 0), 3), D(t2, d, _)) : (x(t2, 4 + (n2 ? 1 : 0), 3), function(t3, e3, a2, i3) {
        let n3;
        for (x(t3, e3 - 257, 5), x(t3, a2 - 1, 5), x(t3, i3 - 4, 4), n3 = 0; n3 < i3; n3++)
          x(t3, t3.bl_tree[2 * h[n3] + 1], 3);
        I(t3, t3.dyn_ltree, e3 - 1), I(t3, t3.dyn_dtree, a2 - 1);
      }(t2, t2.l_desc.max_code + 1, t2.d_desc.max_code + 1, o2 + 1), D(t2, t2.dyn_ltree, t2.dyn_dtree)), R(t2), n2 && Z(t2);
    }, B = {
      _tr_init: function(t2) {
        F || (function() {
          let t3, e2, a2, h2, k2;
          const v2 = new Array(16);
          for (a2 = 0, h2 = 0; h2 < 28; h2++)
            for (c[h2] = a2, t3 = 0; t3 < 1 << r[h2]; t3++)
              u[a2++] = h2;
          for (u[a2 - 1] = h2, k2 = 0, h2 = 0; h2 < 16; h2++)
            for (w[h2] = k2, t3 = 0; t3 < 1 << o[h2]; t3++)
              f[k2++] = h2;
          for (k2 >>= 7; h2 < n; h2++)
            for (w[h2] = k2 << 7, t3 = 0; t3 < 1 << o[h2] - 7; t3++)
              f[256 + k2++] = h2;
          for (e2 = 0; e2 <= s; e2++)
            v2[e2] = 0;
          for (t3 = 0; t3 <= 143; )
            d[2 * t3 + 1] = 8, t3++, v2[8]++;
          for (; t3 <= 255; )
            d[2 * t3 + 1] = 9, t3++, v2[9]++;
          for (; t3 <= 279; )
            d[2 * t3 + 1] = 7, t3++, v2[7]++;
          for (; t3 <= 287; )
            d[2 * t3 + 1] = 8, t3++, v2[8]++;
          for (E(d, 287, v2), t3 = 0; t3 < n; t3++)
            _[2 * t3 + 1] = 5, _[2 * t3] = A(t3, 5);
          m = new b(d, r, 257, i, s), g = new b(_, o, 0, n, s), p = new b(new Array(0), l, 0, 19, 7);
        }(), F = true), t2.l_desc = new k(t2.dyn_ltree, m), t2.d_desc = new k(t2.dyn_dtree, g), t2.bl_desc = new k(t2.bl_tree, p), t2.bi_buf = 0, t2.bi_valid = 0, R(t2);
      },
      _tr_stored_block: L,
      _tr_flush_block: N,
      _tr_tally: function(t2, e2, i2) {
        return t2.pending_buf[t2.sym_buf + t2.sym_next++] = e2, t2.pending_buf[t2.sym_buf + t2.sym_next++] = e2 >> 8, t2.pending_buf[t2.sym_buf + t2.sym_next++] = i2, 0 === e2 ? t2.dyn_ltree[2 * i2]++ : (t2.matches++, e2--, t2.dyn_ltree[2 * (u[i2] + a + 1)]++, t2.dyn_dtree[2 * v(e2)]++), t2.sym_next === t2.sym_end;
      },
      _tr_align: function(t2) {
        x(t2, 2, 3), z(t2, 256, d), function(t3) {
          16 === t3.bi_valid ? (y(t3, t3.bi_buf), t3.bi_buf = 0, t3.bi_valid = 0) : t3.bi_valid >= 8 && (t3.pending_buf[t3.pending++] = 255 & t3.bi_buf, t3.bi_buf >>= 8, t3.bi_valid -= 8);
        }(t2);
      }
    };
    var C = function(t2, e2, a2, i2) {
      let n2 = 65535 & t2 | 0, s2 = t2 >>> 16 & 65535 | 0, r2 = 0;
      for (; 0 !== a2; ) {
        r2 = a2 > 2e3 ? 2e3 : a2, a2 -= r2;
        do {
          n2 = n2 + e2[i2++] | 0, s2 = s2 + n2 | 0;
        } while (--r2);
        n2 %= 65521, s2 %= 65521;
      }
      return n2 | s2 << 16 | 0;
    };
    const M = new Uint32Array(function() {
      let t2, e2 = [];
      for (var a2 = 0; a2 < 256; a2++) {
        t2 = a2;
        for (var i2 = 0; i2 < 8; i2++)
          t2 = 1 & t2 ? 3988292384 ^ t2 >>> 1 : t2 >>> 1;
        e2[a2] = t2;
      }
      return e2;
    }());
    var H = function(t2, e2, a2, i2) {
      const n2 = M, s2 = i2 + a2;
      t2 ^= -1;
      for (let a3 = i2; a3 < s2; a3++)
        t2 = t2 >>> 8 ^ n2[255 & (t2 ^ e2[a3])];
      return -1 ^ t2;
    }, j = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    }, K = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8
    };
    const { _tr_init: P, _tr_stored_block: Y, _tr_flush_block: G, _tr_tally: X, _tr_align: W } = B, { Z_NO_FLUSH: q, Z_PARTIAL_FLUSH: J, Z_FULL_FLUSH: Q, Z_FINISH: V, Z_BLOCK: $, Z_OK: tt, Z_STREAM_END: et, Z_STREAM_ERROR: at, Z_DATA_ERROR: it, Z_BUF_ERROR: nt, Z_DEFAULT_COMPRESSION: st, Z_FILTERED: rt, Z_HUFFMAN_ONLY: ot, Z_RLE: lt, Z_FIXED: ht, Z_DEFAULT_STRATEGY: dt, Z_UNKNOWN: _t, Z_DEFLATED: ft } = K, ut = 258, ct = 262, wt = 42, bt = 113, mt = 666, gt = function(t2, e2) {
      return t2.msg = j[e2], e2;
    }, pt = function(t2) {
      return 2 * t2 - (t2 > 4 ? 9 : 0);
    }, kt = function(t2) {
      let e2 = t2.length;
      for (; --e2 >= 0; )
        t2[e2] = 0;
    }, vt = function(t2) {
      let e2, a2, i2, n2 = t2.w_size;
      e2 = t2.hash_size, i2 = e2;
      do {
        a2 = t2.head[--i2], t2.head[i2] = a2 >= n2 ? a2 - n2 : 0;
      } while (--e2);
      e2 = n2, i2 = e2;
      do {
        a2 = t2.prev[--i2], t2.prev[i2] = a2 >= n2 ? a2 - n2 : 0;
      } while (--e2);
    };
    let yt = function(t2, e2, a2) {
      return (e2 << t2.hash_shift ^ a2) & t2.hash_mask;
    };
    const xt = function(t2) {
      const e2 = t2.state;
      let a2 = e2.pending;
      a2 > t2.avail_out && (a2 = t2.avail_out), 0 !== a2 && (t2.output.set(e2.pending_buf.subarray(e2.pending_out, e2.pending_out + a2), t2.next_out), t2.next_out += a2, e2.pending_out += a2, t2.total_out += a2, t2.avail_out -= a2, e2.pending -= a2, 0 === e2.pending && (e2.pending_out = 0));
    }, zt = function(t2, e2) {
      G(t2, t2.block_start >= 0 ? t2.block_start : -1, t2.strstart - t2.block_start, e2), t2.block_start = t2.strstart, xt(t2.strm);
    }, At = function(t2, e2) {
      t2.pending_buf[t2.pending++] = e2;
    }, Et = function(t2, e2) {
      t2.pending_buf[t2.pending++] = e2 >>> 8 & 255, t2.pending_buf[t2.pending++] = 255 & e2;
    }, Rt = function(t2, e2, a2, i2) {
      let n2 = t2.avail_in;
      return n2 > i2 && (n2 = i2), 0 === n2 ? 0 : (t2.avail_in -= n2, e2.set(t2.input.subarray(t2.next_in, t2.next_in + n2), a2), 1 === t2.state.wrap ? t2.adler = C(t2.adler, e2, n2, a2) : 2 === t2.state.wrap && (t2.adler = H(t2.adler, e2, n2, a2)), t2.next_in += n2, t2.total_in += n2, n2);
    }, Zt = function(t2, e2) {
      let a2, i2, n2 = t2.max_chain_length, s2 = t2.strstart, r2 = t2.prev_length, o2 = t2.nice_match;
      const l2 = t2.strstart > t2.w_size - ct ? t2.strstart - (t2.w_size - ct) : 0, h2 = t2.window, d2 = t2.w_mask, _2 = t2.prev, f2 = t2.strstart + ut;
      let u2 = h2[s2 + r2 - 1], c2 = h2[s2 + r2];
      t2.prev_length >= t2.good_match && (n2 >>= 2), o2 > t2.lookahead && (o2 = t2.lookahead);
      do {
        if (a2 = e2, h2[a2 + r2] === c2 && h2[a2 + r2 - 1] === u2 && h2[a2] === h2[s2] && h2[++a2] === h2[s2 + 1]) {
          s2 += 2, a2++;
          do {
          } while (h2[++s2] === h2[++a2] && h2[++s2] === h2[++a2] && h2[++s2] === h2[++a2] && h2[++s2] === h2[++a2] && h2[++s2] === h2[++a2] && h2[++s2] === h2[++a2] && h2[++s2] === h2[++a2] && h2[++s2] === h2[++a2] && s2 < f2);
          if (i2 = ut - (f2 - s2), s2 = f2 - ut, i2 > r2) {
            if (t2.match_start = e2, r2 = i2, i2 >= o2)
              break;
            u2 = h2[s2 + r2 - 1], c2 = h2[s2 + r2];
          }
        }
      } while ((e2 = _2[e2 & d2]) > l2 && 0 != --n2);
      return r2 <= t2.lookahead ? r2 : t2.lookahead;
    }, Ut = function(t2) {
      const e2 = t2.w_size;
      let a2, i2, n2;
      do {
        if (i2 = t2.window_size - t2.lookahead - t2.strstart, t2.strstart >= e2 + (e2 - ct) && (t2.window.set(t2.window.subarray(e2, e2 + e2 - i2), 0), t2.match_start -= e2, t2.strstart -= e2, t2.block_start -= e2, t2.insert > t2.strstart && (t2.insert = t2.strstart), vt(t2), i2 += e2), 0 === t2.strm.avail_in)
          break;
        if (a2 = Rt(t2.strm, t2.window, t2.strstart + t2.lookahead, i2), t2.lookahead += a2, t2.lookahead + t2.insert >= 3)
          for (n2 = t2.strstart - t2.insert, t2.ins_h = t2.window[n2], t2.ins_h = yt(t2, t2.ins_h, t2.window[n2 + 1]); t2.insert && (t2.ins_h = yt(t2, t2.ins_h, t2.window[n2 + 3 - 1]), t2.prev[n2 & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = n2, n2++, t2.insert--, !(t2.lookahead + t2.insert < 3)); )
            ;
      } while (t2.lookahead < ct && 0 !== t2.strm.avail_in);
    }, St = function(t2, e2) {
      let a2, i2, n2, s2 = t2.pending_buf_size - 5 > t2.w_size ? t2.w_size : t2.pending_buf_size - 5, r2 = 0, o2 = t2.strm.avail_in;
      do {
        if (a2 = 65535, n2 = t2.bi_valid + 42 >> 3, t2.strm.avail_out < n2)
          break;
        if (n2 = t2.strm.avail_out - n2, i2 = t2.strstart - t2.block_start, a2 > i2 + t2.strm.avail_in && (a2 = i2 + t2.strm.avail_in), a2 > n2 && (a2 = n2), a2 < s2 && (0 === a2 && e2 !== V || e2 === q || a2 !== i2 + t2.strm.avail_in))
          break;
        r2 = e2 === V && a2 === i2 + t2.strm.avail_in ? 1 : 0, Y(t2, 0, 0, r2), t2.pending_buf[t2.pending - 4] = a2, t2.pending_buf[t2.pending - 3] = a2 >> 8, t2.pending_buf[t2.pending - 2] = ~a2, t2.pending_buf[t2.pending - 1] = ~a2 >> 8, xt(t2.strm), i2 && (i2 > a2 && (i2 = a2), t2.strm.output.set(t2.window.subarray(t2.block_start, t2.block_start + i2), t2.strm.next_out), t2.strm.next_out += i2, t2.strm.avail_out -= i2, t2.strm.total_out += i2, t2.block_start += i2, a2 -= i2), a2 && (Rt(t2.strm, t2.strm.output, t2.strm.next_out, a2), t2.strm.next_out += a2, t2.strm.avail_out -= a2, t2.strm.total_out += a2);
      } while (0 === r2);
      return o2 -= t2.strm.avail_in, o2 && (o2 >= t2.w_size ? (t2.matches = 2, t2.window.set(t2.strm.input.subarray(t2.strm.next_in - t2.w_size, t2.strm.next_in), 0), t2.strstart = t2.w_size, t2.insert = t2.strstart) : (t2.window_size - t2.strstart <= o2 && (t2.strstart -= t2.w_size, t2.window.set(t2.window.subarray(t2.w_size, t2.w_size + t2.strstart), 0), t2.matches < 2 && t2.matches++, t2.insert > t2.strstart && (t2.insert = t2.strstart)), t2.window.set(t2.strm.input.subarray(t2.strm.next_in - o2, t2.strm.next_in), t2.strstart), t2.strstart += o2, t2.insert += o2 > t2.w_size - t2.insert ? t2.w_size - t2.insert : o2), t2.block_start = t2.strstart), t2.high_water < t2.strstart && (t2.high_water = t2.strstart), r2 ? 4 : e2 !== q && e2 !== V && 0 === t2.strm.avail_in && t2.strstart === t2.block_start ? 2 : (n2 = t2.window_size - t2.strstart, t2.strm.avail_in > n2 && t2.block_start >= t2.w_size && (t2.block_start -= t2.w_size, t2.strstart -= t2.w_size, t2.window.set(t2.window.subarray(t2.w_size, t2.w_size + t2.strstart), 0), t2.matches < 2 && t2.matches++, n2 += t2.w_size, t2.insert > t2.strstart && (t2.insert = t2.strstart)), n2 > t2.strm.avail_in && (n2 = t2.strm.avail_in), n2 && (Rt(t2.strm, t2.window, t2.strstart, n2), t2.strstart += n2, t2.insert += n2 > t2.w_size - t2.insert ? t2.w_size - t2.insert : n2), t2.high_water < t2.strstart && (t2.high_water = t2.strstart), n2 = t2.bi_valid + 42 >> 3, n2 = t2.pending_buf_size - n2 > 65535 ? 65535 : t2.pending_buf_size - n2, s2 = n2 > t2.w_size ? t2.w_size : n2, i2 = t2.strstart - t2.block_start, (i2 >= s2 || (i2 || e2 === V) && e2 !== q && 0 === t2.strm.avail_in && i2 <= n2) && (a2 = i2 > n2 ? n2 : i2, r2 = e2 === V && 0 === t2.strm.avail_in && a2 === i2 ? 1 : 0, Y(t2, t2.block_start, a2, r2), t2.block_start += a2, xt(t2.strm)), r2 ? 3 : 1);
    }, Dt = function(t2, e2) {
      let a2, i2;
      for (; ; ) {
        if (t2.lookahead < ct) {
          if (Ut(t2), t2.lookahead < ct && e2 === q)
            return 1;
          if (0 === t2.lookahead)
            break;
        }
        if (a2 = 0, t2.lookahead >= 3 && (t2.ins_h = yt(t2, t2.ins_h, t2.window[t2.strstart + 3 - 1]), a2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart), 0 !== a2 && t2.strstart - a2 <= t2.w_size - ct && (t2.match_length = Zt(t2, a2)), t2.match_length >= 3)
          if (i2 = X(t2, t2.strstart - t2.match_start, t2.match_length - 3), t2.lookahead -= t2.match_length, t2.match_length <= t2.max_lazy_match && t2.lookahead >= 3) {
            t2.match_length--;
            do {
              t2.strstart++, t2.ins_h = yt(t2, t2.ins_h, t2.window[t2.strstart + 3 - 1]), a2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart;
            } while (0 != --t2.match_length);
            t2.strstart++;
          } else
            t2.strstart += t2.match_length, t2.match_length = 0, t2.ins_h = t2.window[t2.strstart], t2.ins_h = yt(t2, t2.ins_h, t2.window[t2.strstart + 1]);
        else
          i2 = X(t2, 0, t2.window[t2.strstart]), t2.lookahead--, t2.strstart++;
        if (i2 && (zt(t2, false), 0 === t2.strm.avail_out))
          return 1;
      }
      return t2.insert = t2.strstart < 2 ? t2.strstart : 2, e2 === V ? (zt(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : t2.sym_next && (zt(t2, false), 0 === t2.strm.avail_out) ? 1 : 2;
    }, Tt = function(t2, e2) {
      let a2, i2, n2;
      for (; ; ) {
        if (t2.lookahead < ct) {
          if (Ut(t2), t2.lookahead < ct && e2 === q)
            return 1;
          if (0 === t2.lookahead)
            break;
        }
        if (a2 = 0, t2.lookahead >= 3 && (t2.ins_h = yt(t2, t2.ins_h, t2.window[t2.strstart + 3 - 1]), a2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart), t2.prev_length = t2.match_length, t2.prev_match = t2.match_start, t2.match_length = 2, 0 !== a2 && t2.prev_length < t2.max_lazy_match && t2.strstart - a2 <= t2.w_size - ct && (t2.match_length = Zt(t2, a2), t2.match_length <= 5 && (t2.strategy === rt || 3 === t2.match_length && t2.strstart - t2.match_start > 4096) && (t2.match_length = 2)), t2.prev_length >= 3 && t2.match_length <= t2.prev_length) {
          n2 = t2.strstart + t2.lookahead - 3, i2 = X(t2, t2.strstart - 1 - t2.prev_match, t2.prev_length - 3), t2.lookahead -= t2.prev_length - 1, t2.prev_length -= 2;
          do {
            ++t2.strstart <= n2 && (t2.ins_h = yt(t2, t2.ins_h, t2.window[t2.strstart + 3 - 1]), a2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart);
          } while (0 != --t2.prev_length);
          if (t2.match_available = 0, t2.match_length = 2, t2.strstart++, i2 && (zt(t2, false), 0 === t2.strm.avail_out))
            return 1;
        } else if (t2.match_available) {
          if (i2 = X(t2, 0, t2.window[t2.strstart - 1]), i2 && zt(t2, false), t2.strstart++, t2.lookahead--, 0 === t2.strm.avail_out)
            return 1;
        } else
          t2.match_available = 1, t2.strstart++, t2.lookahead--;
      }
      return t2.match_available && (i2 = X(t2, 0, t2.window[t2.strstart - 1]), t2.match_available = 0), t2.insert = t2.strstart < 2 ? t2.strstart : 2, e2 === V ? (zt(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : t2.sym_next && (zt(t2, false), 0 === t2.strm.avail_out) ? 1 : 2;
    };
    function Ot(t2, e2, a2, i2, n2) {
      this.good_length = t2, this.max_lazy = e2, this.nice_length = a2, this.max_chain = i2, this.func = n2;
    }
    const It = [
      new Ot(0, 0, 0, 0, St),
      new Ot(4, 4, 8, 4, Dt),
      new Ot(4, 5, 16, 8, Dt),
      new Ot(4, 6, 32, 32, Dt),
      new Ot(4, 4, 16, 16, Tt),
      new Ot(8, 16, 32, 32, Tt),
      new Ot(8, 16, 128, 128, Tt),
      new Ot(8, 32, 128, 256, Tt),
      new Ot(32, 128, 258, 1024, Tt),
      new Ot(32, 258, 258, 4096, Tt)
    ];
    function Ft() {
      this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = ft, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), kt(this.dyn_ltree), kt(this.dyn_dtree), kt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), kt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), kt(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
    }
    const Lt = function(t2) {
      if (!t2)
        return 1;
      const e2 = t2.state;
      return !e2 || e2.strm !== t2 || e2.status !== wt && 57 !== e2.status && 69 !== e2.status && 73 !== e2.status && 91 !== e2.status && 103 !== e2.status && e2.status !== bt && e2.status !== mt ? 1 : 0;
    }, Nt = function(t2) {
      if (Lt(t2))
        return gt(t2, at);
      t2.total_in = t2.total_out = 0, t2.data_type = _t;
      const e2 = t2.state;
      return e2.pending = 0, e2.pending_out = 0, e2.wrap < 0 && (e2.wrap = -e2.wrap), e2.status = 2 === e2.wrap ? 57 : e2.wrap ? wt : bt, t2.adler = 2 === e2.wrap ? 0 : 1, e2.last_flush = -2, P(e2), tt;
    }, Bt = function(t2) {
      const e2 = Nt(t2);
      var a2;
      return e2 === tt && ((a2 = t2.state).window_size = 2 * a2.w_size, kt(a2.head), a2.max_lazy_match = It[a2.level].max_lazy, a2.good_match = It[a2.level].good_length, a2.nice_match = It[a2.level].nice_length, a2.max_chain_length = It[a2.level].max_chain, a2.strstart = 0, a2.block_start = 0, a2.lookahead = 0, a2.insert = 0, a2.match_length = a2.prev_length = 2, a2.match_available = 0, a2.ins_h = 0), e2;
    }, Ct = function(t2, e2, a2, i2, n2, s2) {
      if (!t2)
        return at;
      let r2 = 1;
      if (e2 === st && (e2 = 6), i2 < 0 ? (r2 = 0, i2 = -i2) : i2 > 15 && (r2 = 2, i2 -= 16), n2 < 1 || n2 > 9 || a2 !== ft || i2 < 8 || i2 > 15 || e2 < 0 || e2 > 9 || s2 < 0 || s2 > ht || 8 === i2 && 1 !== r2)
        return gt(t2, at);
      8 === i2 && (i2 = 9);
      const o2 = new Ft();
      return t2.state = o2, o2.strm = t2, o2.status = wt, o2.wrap = r2, o2.gzhead = null, o2.w_bits = i2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = n2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + 3 - 1) / 3), o2.window = new Uint8Array(2 * o2.w_size), o2.head = new Uint16Array(o2.hash_size), o2.prev = new Uint16Array(o2.w_size), o2.lit_bufsize = 1 << n2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new Uint8Array(o2.pending_buf_size), o2.sym_buf = o2.lit_bufsize, o2.sym_end = 3 * (o2.lit_bufsize - 1), o2.level = e2, o2.strategy = s2, o2.method = a2, Bt(t2);
    };
    var Mt = {
      deflateInit: function(t2, e2) {
        return Ct(t2, e2, ft, 15, 8, dt);
      },
      deflateInit2: Ct,
      deflateReset: Bt,
      deflateResetKeep: Nt,
      deflateSetHeader: function(t2, e2) {
        return Lt(t2) || 2 !== t2.state.wrap ? at : (t2.state.gzhead = e2, tt);
      },
      deflate: function(t2, e2) {
        if (Lt(t2) || e2 > $ || e2 < 0)
          return t2 ? gt(t2, at) : at;
        const a2 = t2.state;
        if (!t2.output || 0 !== t2.avail_in && !t2.input || a2.status === mt && e2 !== V)
          return gt(t2, 0 === t2.avail_out ? nt : at);
        const i2 = a2.last_flush;
        if (a2.last_flush = e2, 0 !== a2.pending) {
          if (xt(t2), 0 === t2.avail_out)
            return a2.last_flush = -1, tt;
        } else if (0 === t2.avail_in && pt(e2) <= pt(i2) && e2 !== V)
          return gt(t2, nt);
        if (a2.status === mt && 0 !== t2.avail_in)
          return gt(t2, nt);
        if (a2.status === wt && 0 === a2.wrap && (a2.status = bt), a2.status === wt) {
          let e3 = ft + (a2.w_bits - 8 << 4) << 8, i3 = -1;
          if (i3 = a2.strategy >= ot || a2.level < 2 ? 0 : a2.level < 6 ? 1 : 6 === a2.level ? 2 : 3, e3 |= i3 << 6, 0 !== a2.strstart && (e3 |= 32), e3 += 31 - e3 % 31, Et(a2, e3), 0 !== a2.strstart && (Et(a2, t2.adler >>> 16), Et(a2, 65535 & t2.adler)), t2.adler = 1, a2.status = bt, xt(t2), 0 !== a2.pending)
            return a2.last_flush = -1, tt;
        }
        if (57 === a2.status) {
          if (t2.adler = 0, At(a2, 31), At(a2, 139), At(a2, 8), a2.gzhead)
            At(a2, (a2.gzhead.text ? 1 : 0) + (a2.gzhead.hcrc ? 2 : 0) + (a2.gzhead.extra ? 4 : 0) + (a2.gzhead.name ? 8 : 0) + (a2.gzhead.comment ? 16 : 0)), At(a2, 255 & a2.gzhead.time), At(a2, a2.gzhead.time >> 8 & 255), At(a2, a2.gzhead.time >> 16 & 255), At(a2, a2.gzhead.time >> 24 & 255), At(a2, 9 === a2.level ? 2 : a2.strategy >= ot || a2.level < 2 ? 4 : 0), At(a2, 255 & a2.gzhead.os), a2.gzhead.extra && a2.gzhead.extra.length && (At(a2, 255 & a2.gzhead.extra.length), At(a2, a2.gzhead.extra.length >> 8 & 255)), a2.gzhead.hcrc && (t2.adler = H(t2.adler, a2.pending_buf, a2.pending, 0)), a2.gzindex = 0, a2.status = 69;
          else if (At(a2, 0), At(a2, 0), At(a2, 0), At(a2, 0), At(a2, 0), At(a2, 9 === a2.level ? 2 : a2.strategy >= ot || a2.level < 2 ? 4 : 0), At(a2, 3), a2.status = bt, xt(t2), 0 !== a2.pending)
            return a2.last_flush = -1, tt;
        }
        if (69 === a2.status) {
          if (a2.gzhead.extra) {
            let e3 = a2.pending, i3 = (65535 & a2.gzhead.extra.length) - a2.gzindex;
            for (; a2.pending + i3 > a2.pending_buf_size; ) {
              let n3 = a2.pending_buf_size - a2.pending;
              if (a2.pending_buf.set(a2.gzhead.extra.subarray(a2.gzindex, a2.gzindex + n3), a2.pending), a2.pending = a2.pending_buf_size, a2.gzhead.hcrc && a2.pending > e3 && (t2.adler = H(t2.adler, a2.pending_buf, a2.pending - e3, e3)), a2.gzindex += n3, xt(t2), 0 !== a2.pending)
                return a2.last_flush = -1, tt;
              e3 = 0, i3 -= n3;
            }
            let n2 = new Uint8Array(a2.gzhead.extra);
            a2.pending_buf.set(n2.subarray(a2.gzindex, a2.gzindex + i3), a2.pending), a2.pending += i3, a2.gzhead.hcrc && a2.pending > e3 && (t2.adler = H(t2.adler, a2.pending_buf, a2.pending - e3, e3)), a2.gzindex = 0;
          }
          a2.status = 73;
        }
        if (73 === a2.status) {
          if (a2.gzhead.name) {
            let e3, i3 = a2.pending;
            do {
              if (a2.pending === a2.pending_buf_size) {
                if (a2.gzhead.hcrc && a2.pending > i3 && (t2.adler = H(t2.adler, a2.pending_buf, a2.pending - i3, i3)), xt(t2), 0 !== a2.pending)
                  return a2.last_flush = -1, tt;
                i3 = 0;
              }
              e3 = a2.gzindex < a2.gzhead.name.length ? 255 & a2.gzhead.name.charCodeAt(a2.gzindex++) : 0, At(a2, e3);
            } while (0 !== e3);
            a2.gzhead.hcrc && a2.pending > i3 && (t2.adler = H(t2.adler, a2.pending_buf, a2.pending - i3, i3)), a2.gzindex = 0;
          }
          a2.status = 91;
        }
        if (91 === a2.status) {
          if (a2.gzhead.comment) {
            let e3, i3 = a2.pending;
            do {
              if (a2.pending === a2.pending_buf_size) {
                if (a2.gzhead.hcrc && a2.pending > i3 && (t2.adler = H(t2.adler, a2.pending_buf, a2.pending - i3, i3)), xt(t2), 0 !== a2.pending)
                  return a2.last_flush = -1, tt;
                i3 = 0;
              }
              e3 = a2.gzindex < a2.gzhead.comment.length ? 255 & a2.gzhead.comment.charCodeAt(a2.gzindex++) : 0, At(a2, e3);
            } while (0 !== e3);
            a2.gzhead.hcrc && a2.pending > i3 && (t2.adler = H(t2.adler, a2.pending_buf, a2.pending - i3, i3));
          }
          a2.status = 103;
        }
        if (103 === a2.status) {
          if (a2.gzhead.hcrc) {
            if (a2.pending + 2 > a2.pending_buf_size && (xt(t2), 0 !== a2.pending))
              return a2.last_flush = -1, tt;
            At(a2, 255 & t2.adler), At(a2, t2.adler >> 8 & 255), t2.adler = 0;
          }
          if (a2.status = bt, xt(t2), 0 !== a2.pending)
            return a2.last_flush = -1, tt;
        }
        if (0 !== t2.avail_in || 0 !== a2.lookahead || e2 !== q && a2.status !== mt) {
          let i3 = 0 === a2.level ? St(a2, e2) : a2.strategy === ot ? function(t3, e3) {
            let a3;
            for (; ; ) {
              if (0 === t3.lookahead && (Ut(t3), 0 === t3.lookahead)) {
                if (e3 === q)
                  return 1;
                break;
              }
              if (t3.match_length = 0, a3 = X(t3, 0, t3.window[t3.strstart]), t3.lookahead--, t3.strstart++, a3 && (zt(t3, false), 0 === t3.strm.avail_out))
                return 1;
            }
            return t3.insert = 0, e3 === V ? (zt(t3, true), 0 === t3.strm.avail_out ? 3 : 4) : t3.sym_next && (zt(t3, false), 0 === t3.strm.avail_out) ? 1 : 2;
          }(a2, e2) : a2.strategy === lt ? function(t3, e3) {
            let a3, i4, n2, s2;
            const r2 = t3.window;
            for (; ; ) {
              if (t3.lookahead <= ut) {
                if (Ut(t3), t3.lookahead <= ut && e3 === q)
                  return 1;
                if (0 === t3.lookahead)
                  break;
              }
              if (t3.match_length = 0, t3.lookahead >= 3 && t3.strstart > 0 && (n2 = t3.strstart - 1, i4 = r2[n2], i4 === r2[++n2] && i4 === r2[++n2] && i4 === r2[++n2])) {
                s2 = t3.strstart + ut;
                do {
                } while (i4 === r2[++n2] && i4 === r2[++n2] && i4 === r2[++n2] && i4 === r2[++n2] && i4 === r2[++n2] && i4 === r2[++n2] && i4 === r2[++n2] && i4 === r2[++n2] && n2 < s2);
                t3.match_length = ut - (s2 - n2), t3.match_length > t3.lookahead && (t3.match_length = t3.lookahead);
              }
              if (t3.match_length >= 3 ? (a3 = X(t3, 1, t3.match_length - 3), t3.lookahead -= t3.match_length, t3.strstart += t3.match_length, t3.match_length = 0) : (a3 = X(t3, 0, t3.window[t3.strstart]), t3.lookahead--, t3.strstart++), a3 && (zt(t3, false), 0 === t3.strm.avail_out))
                return 1;
            }
            return t3.insert = 0, e3 === V ? (zt(t3, true), 0 === t3.strm.avail_out ? 3 : 4) : t3.sym_next && (zt(t3, false), 0 === t3.strm.avail_out) ? 1 : 2;
          }(a2, e2) : It[a2.level].func(a2, e2);
          if (3 !== i3 && 4 !== i3 || (a2.status = mt), 1 === i3 || 3 === i3)
            return 0 === t2.avail_out && (a2.last_flush = -1), tt;
          if (2 === i3 && (e2 === J ? W(a2) : e2 !== $ && (Y(a2, 0, 0, false), e2 === Q && (kt(a2.head), 0 === a2.lookahead && (a2.strstart = 0, a2.block_start = 0, a2.insert = 0))), xt(t2), 0 === t2.avail_out))
            return a2.last_flush = -1, tt;
        }
        return e2 !== V ? tt : a2.wrap <= 0 ? et : (2 === a2.wrap ? (At(a2, 255 & t2.adler), At(a2, t2.adler >> 8 & 255), At(a2, t2.adler >> 16 & 255), At(a2, t2.adler >> 24 & 255), At(a2, 255 & t2.total_in), At(a2, t2.total_in >> 8 & 255), At(a2, t2.total_in >> 16 & 255), At(a2, t2.total_in >> 24 & 255)) : (Et(a2, t2.adler >>> 16), Et(a2, 65535 & t2.adler)), xt(t2), a2.wrap > 0 && (a2.wrap = -a2.wrap), 0 !== a2.pending ? tt : et);
      },
      deflateEnd: function(t2) {
        if (Lt(t2))
          return at;
        const e2 = t2.state.status;
        return t2.state = null, e2 === bt ? gt(t2, it) : tt;
      },
      deflateSetDictionary: function(t2, e2) {
        let a2 = e2.length;
        if (Lt(t2))
          return at;
        const i2 = t2.state, n2 = i2.wrap;
        if (2 === n2 || 1 === n2 && i2.status !== wt || i2.lookahead)
          return at;
        if (1 === n2 && (t2.adler = C(t2.adler, e2, a2, 0)), i2.wrap = 0, a2 >= i2.w_size) {
          0 === n2 && (kt(i2.head), i2.strstart = 0, i2.block_start = 0, i2.insert = 0);
          let t3 = new Uint8Array(i2.w_size);
          t3.set(e2.subarray(a2 - i2.w_size, a2), 0), e2 = t3, a2 = i2.w_size;
        }
        const s2 = t2.avail_in, r2 = t2.next_in, o2 = t2.input;
        for (t2.avail_in = a2, t2.next_in = 0, t2.input = e2, Ut(i2); i2.lookahead >= 3; ) {
          let t3 = i2.strstart, e3 = i2.lookahead - 2;
          do {
            i2.ins_h = yt(i2, i2.ins_h, i2.window[t3 + 3 - 1]), i2.prev[t3 & i2.w_mask] = i2.head[i2.ins_h], i2.head[i2.ins_h] = t3, t3++;
          } while (--e3);
          i2.strstart = t3, i2.lookahead = 2, Ut(i2);
        }
        return i2.strstart += i2.lookahead, i2.block_start = i2.strstart, i2.insert = i2.lookahead, i2.lookahead = 0, i2.match_length = i2.prev_length = 2, i2.match_available = 0, t2.next_in = r2, t2.input = o2, t2.avail_in = s2, i2.wrap = n2, tt;
      },
      deflateInfo: "pako deflate (from Nodeca project)"
    };
    const Ht = function(t2, e2) {
      return Object.prototype.hasOwnProperty.call(t2, e2);
    };
    var jt = {
      assign: function(t2) {
        const e2 = Array.prototype.slice.call(arguments, 1);
        for (; e2.length; ) {
          const a2 = e2.shift();
          if (a2) {
            if ("object" != typeof a2)
              throw new TypeError(a2 + "must be non-object");
            for (const e3 in a2)
              Ht(a2, e3) && (t2[e3] = a2[e3]);
          }
        }
        return t2;
      },
      flattenChunks: function(t2) {
        let e2 = 0;
        for (let a3 = 0, i2 = t2.length; a3 < i2; a3++)
          e2 += t2[a3].length;
        const a2 = new Uint8Array(e2);
        for (let e3 = 0, i2 = 0, n2 = t2.length; e3 < n2; e3++) {
          let n3 = t2[e3];
          a2.set(n3, i2), i2 += n3.length;
        }
        return a2;
      }
    };
    let Kt = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (t2) {
      Kt = false;
    }
    const Pt = new Uint8Array(256);
    for (let t2 = 0; t2 < 256; t2++)
      Pt[t2] = t2 >= 252 ? 6 : t2 >= 248 ? 5 : t2 >= 240 ? 4 : t2 >= 224 ? 3 : t2 >= 192 ? 2 : 1;
    Pt[254] = Pt[254] = 1;
    var Yt = {
      string2buf: function(t2) {
        if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
          return new TextEncoder().encode(t2);
        let e2, a2, i2, n2, s2, r2 = t2.length, o2 = 0;
        for (n2 = 0; n2 < r2; n2++)
          a2 = t2.charCodeAt(n2), 55296 == (64512 & a2) && n2 + 1 < r2 && (i2 = t2.charCodeAt(n2 + 1), 56320 == (64512 & i2) && (a2 = 65536 + (a2 - 55296 << 10) + (i2 - 56320), n2++)), o2 += a2 < 128 ? 1 : a2 < 2048 ? 2 : a2 < 65536 ? 3 : 4;
        for (e2 = new Uint8Array(o2), s2 = 0, n2 = 0; s2 < o2; n2++)
          a2 = t2.charCodeAt(n2), 55296 == (64512 & a2) && n2 + 1 < r2 && (i2 = t2.charCodeAt(n2 + 1), 56320 == (64512 & i2) && (a2 = 65536 + (a2 - 55296 << 10) + (i2 - 56320), n2++)), a2 < 128 ? e2[s2++] = a2 : a2 < 2048 ? (e2[s2++] = 192 | a2 >>> 6, e2[s2++] = 128 | 63 & a2) : a2 < 65536 ? (e2[s2++] = 224 | a2 >>> 12, e2[s2++] = 128 | a2 >>> 6 & 63, e2[s2++] = 128 | 63 & a2) : (e2[s2++] = 240 | a2 >>> 18, e2[s2++] = 128 | a2 >>> 12 & 63, e2[s2++] = 128 | a2 >>> 6 & 63, e2[s2++] = 128 | 63 & a2);
        return e2;
      },
      buf2string: function(t2, e2) {
        const a2 = e2 || t2.length;
        if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
          return new TextDecoder().decode(t2.subarray(0, e2));
        let i2, n2;
        const s2 = new Array(2 * a2);
        for (n2 = 0, i2 = 0; i2 < a2; ) {
          let e3 = t2[i2++];
          if (e3 < 128) {
            s2[n2++] = e3;
            continue;
          }
          let r2 = Pt[e3];
          if (r2 > 4)
            s2[n2++] = 65533, i2 += r2 - 1;
          else {
            for (e3 &= 2 === r2 ? 31 : 3 === r2 ? 15 : 7; r2 > 1 && i2 < a2; )
              e3 = e3 << 6 | 63 & t2[i2++], r2--;
            r2 > 1 ? s2[n2++] = 65533 : e3 < 65536 ? s2[n2++] = e3 : (e3 -= 65536, s2[n2++] = 55296 | e3 >> 10 & 1023, s2[n2++] = 56320 | 1023 & e3);
          }
        }
        return function(t3, e3) {
          if (e3 < 65534 && t3.subarray && Kt)
            return String.fromCharCode.apply(null, t3.length === e3 ? t3 : t3.subarray(0, e3));
          let a3 = "";
          for (let i3 = 0; i3 < e3; i3++)
            a3 += String.fromCharCode(t3[i3]);
          return a3;
        }(s2, n2);
      },
      utf8border: function(t2, e2) {
        (e2 = e2 || t2.length) > t2.length && (e2 = t2.length);
        let a2 = e2 - 1;
        for (; a2 >= 0 && 128 == (192 & t2[a2]); )
          a2--;
        return a2 < 0 || 0 === a2 ? e2 : a2 + Pt[t2[a2]] > e2 ? a2 : e2;
      }
    };
    var Gt = function() {
      this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
    };
    const Xt = Object.prototype.toString, { Z_NO_FLUSH: Wt, Z_SYNC_FLUSH: qt, Z_FULL_FLUSH: Jt, Z_FINISH: Qt, Z_OK: Vt, Z_STREAM_END: $t, Z_DEFAULT_COMPRESSION: te, Z_DEFAULT_STRATEGY: ee, Z_DEFLATED: ae } = K;
    function ie(t2) {
      this.options = jt.assign({
        level: te,
        method: ae,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: ee
      }, t2 || {});
      let e2 = this.options;
      e2.raw && e2.windowBits > 0 ? e2.windowBits = -e2.windowBits : e2.gzip && e2.windowBits > 0 && e2.windowBits < 16 && (e2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new Gt(), this.strm.avail_out = 0;
      let a2 = Mt.deflateInit2(this.strm, e2.level, e2.method, e2.windowBits, e2.memLevel, e2.strategy);
      if (a2 !== Vt)
        throw new Error(j[a2]);
      if (e2.header && Mt.deflateSetHeader(this.strm, e2.header), e2.dictionary) {
        let t3;
        if (t3 = "string" == typeof e2.dictionary ? Yt.string2buf(e2.dictionary) : "[object ArrayBuffer]" === Xt.call(e2.dictionary) ? new Uint8Array(e2.dictionary) : e2.dictionary, a2 = Mt.deflateSetDictionary(this.strm, t3), a2 !== Vt)
          throw new Error(j[a2]);
        this._dict_set = true;
      }
    }
    function ne(t2, e2) {
      const a2 = new ie(e2);
      if (a2.push(t2, true), a2.err)
        throw a2.msg || j[a2.err];
      return a2.result;
    }
    ie.prototype.push = function(t2, e2) {
      const a2 = this.strm, i2 = this.options.chunkSize;
      let n2, s2;
      if (this.ended)
        return false;
      for (s2 = e2 === ~~e2 ? e2 : true === e2 ? Qt : Wt, "string" == typeof t2 ? a2.input = Yt.string2buf(t2) : "[object ArrayBuffer]" === Xt.call(t2) ? a2.input = new Uint8Array(t2) : a2.input = t2, a2.next_in = 0, a2.avail_in = a2.input.length; ; )
        if (0 === a2.avail_out && (a2.output = new Uint8Array(i2), a2.next_out = 0, a2.avail_out = i2), (s2 === qt || s2 === Jt) && a2.avail_out <= 6)
          this.onData(a2.output.subarray(0, a2.next_out)), a2.avail_out = 0;
        else {
          if (n2 = Mt.deflate(a2, s2), n2 === $t)
            return a2.next_out > 0 && this.onData(a2.output.subarray(0, a2.next_out)), n2 = Mt.deflateEnd(this.strm), this.onEnd(n2), this.ended = true, n2 === Vt;
          if (0 !== a2.avail_out) {
            if (s2 > 0 && a2.next_out > 0)
              this.onData(a2.output.subarray(0, a2.next_out)), a2.avail_out = 0;
            else if (0 === a2.avail_in)
              break;
          } else
            this.onData(a2.output);
        }
      return true;
    }, ie.prototype.onData = function(t2) {
      this.chunks.push(t2);
    }, ie.prototype.onEnd = function(t2) {
      t2 === Vt && (this.result = jt.flattenChunks(this.chunks)), this.chunks = [], this.err = t2, this.msg = this.strm.msg;
    };
    var se = {
      Deflate: ie,
      deflate: ne,
      deflateRaw: function(t2, e2) {
        return (e2 = e2 || {}).raw = true, ne(t2, e2);
      },
      gzip: function(t2, e2) {
        return (e2 = e2 || {}).gzip = true, ne(t2, e2);
      },
      constants: K
    };
    const re = 16209;
    var oe = function(t2, e2) {
      let a2, i2, n2, s2, r2, o2, l2, h2, d2, _2, f2, u2, c2, w2, b2, m2, g2, p2, k2, v2, y2, x2, z2, A2;
      const E2 = t2.state;
      a2 = t2.next_in, z2 = t2.input, i2 = a2 + (t2.avail_in - 5), n2 = t2.next_out, A2 = t2.output, s2 = n2 - (e2 - t2.avail_out), r2 = n2 + (t2.avail_out - 257), o2 = E2.dmax, l2 = E2.wsize, h2 = E2.whave, d2 = E2.wnext, _2 = E2.window, f2 = E2.hold, u2 = E2.bits, c2 = E2.lencode, w2 = E2.distcode, b2 = (1 << E2.lenbits) - 1, m2 = (1 << E2.distbits) - 1;
      t:
        do {
          u2 < 15 && (f2 += z2[a2++] << u2, u2 += 8, f2 += z2[a2++] << u2, u2 += 8), g2 = c2[f2 & b2];
          e:
            for (; ; ) {
              if (p2 = g2 >>> 24, f2 >>>= p2, u2 -= p2, p2 = g2 >>> 16 & 255, 0 === p2)
                A2[n2++] = 65535 & g2;
              else {
                if (!(16 & p2)) {
                  if (0 == (64 & p2)) {
                    g2 = c2[(65535 & g2) + (f2 & (1 << p2) - 1)];
                    continue e;
                  }
                  if (32 & p2) {
                    E2.mode = 16191;
                    break t;
                  }
                  t2.msg = "invalid literal/length code", E2.mode = re;
                  break t;
                }
                k2 = 65535 & g2, p2 &= 15, p2 && (u2 < p2 && (f2 += z2[a2++] << u2, u2 += 8), k2 += f2 & (1 << p2) - 1, f2 >>>= p2, u2 -= p2), u2 < 15 && (f2 += z2[a2++] << u2, u2 += 8, f2 += z2[a2++] << u2, u2 += 8), g2 = w2[f2 & m2];
                a:
                  for (; ; ) {
                    if (p2 = g2 >>> 24, f2 >>>= p2, u2 -= p2, p2 = g2 >>> 16 & 255, !(16 & p2)) {
                      if (0 == (64 & p2)) {
                        g2 = w2[(65535 & g2) + (f2 & (1 << p2) - 1)];
                        continue a;
                      }
                      t2.msg = "invalid distance code", E2.mode = re;
                      break t;
                    }
                    if (v2 = 65535 & g2, p2 &= 15, u2 < p2 && (f2 += z2[a2++] << u2, u2 += 8, u2 < p2 && (f2 += z2[a2++] << u2, u2 += 8)), v2 += f2 & (1 << p2) - 1, v2 > o2) {
                      t2.msg = "invalid distance too far back", E2.mode = re;
                      break t;
                    }
                    if (f2 >>>= p2, u2 -= p2, p2 = n2 - s2, v2 > p2) {
                      if (p2 = v2 - p2, p2 > h2 && E2.sane) {
                        t2.msg = "invalid distance too far back", E2.mode = re;
                        break t;
                      }
                      if (y2 = 0, x2 = _2, 0 === d2) {
                        if (y2 += l2 - p2, p2 < k2) {
                          k2 -= p2;
                          do {
                            A2[n2++] = _2[y2++];
                          } while (--p2);
                          y2 = n2 - v2, x2 = A2;
                        }
                      } else if (d2 < p2) {
                        if (y2 += l2 + d2 - p2, p2 -= d2, p2 < k2) {
                          k2 -= p2;
                          do {
                            A2[n2++] = _2[y2++];
                          } while (--p2);
                          if (y2 = 0, d2 < k2) {
                            p2 = d2, k2 -= p2;
                            do {
                              A2[n2++] = _2[y2++];
                            } while (--p2);
                            y2 = n2 - v2, x2 = A2;
                          }
                        }
                      } else if (y2 += d2 - p2, p2 < k2) {
                        k2 -= p2;
                        do {
                          A2[n2++] = _2[y2++];
                        } while (--p2);
                        y2 = n2 - v2, x2 = A2;
                      }
                      for (; k2 > 2; )
                        A2[n2++] = x2[y2++], A2[n2++] = x2[y2++], A2[n2++] = x2[y2++], k2 -= 3;
                      k2 && (A2[n2++] = x2[y2++], k2 > 1 && (A2[n2++] = x2[y2++]));
                    } else {
                      y2 = n2 - v2;
                      do {
                        A2[n2++] = A2[y2++], A2[n2++] = A2[y2++], A2[n2++] = A2[y2++], k2 -= 3;
                      } while (k2 > 2);
                      k2 && (A2[n2++] = A2[y2++], k2 > 1 && (A2[n2++] = A2[y2++]));
                    }
                    break;
                  }
              }
              break;
            }
        } while (a2 < i2 && n2 < r2);
      k2 = u2 >> 3, a2 -= k2, u2 -= k2 << 3, f2 &= (1 << u2) - 1, t2.next_in = a2, t2.next_out = n2, t2.avail_in = a2 < i2 ? i2 - a2 + 5 : 5 - (a2 - i2), t2.avail_out = n2 < r2 ? r2 - n2 + 257 : 257 - (n2 - r2), E2.hold = f2, E2.bits = u2;
    };
    const le = 15, he = new Uint16Array([
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0
    ]), de = new Uint8Array([
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      17,
      17,
      17,
      17,
      18,
      18,
      18,
      18,
      19,
      19,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      16,
      72,
      78
    ]), _e = new Uint16Array([
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
      0,
      0
    ]), fe = new Uint8Array([
      16,
      16,
      16,
      16,
      17,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      21,
      21,
      22,
      22,
      23,
      23,
      24,
      24,
      25,
      25,
      26,
      26,
      27,
      27,
      28,
      28,
      29,
      29,
      64,
      64
    ]);
    var ue = function(t2, e2, a2, i2, n2, s2, r2, o2) {
      const l2 = o2.bits;
      let h2, d2, _2, f2, u2, c2, w2 = 0, b2 = 0, m2 = 0, g2 = 0, p2 = 0, k2 = 0, v2 = 0, y2 = 0, x2 = 0, z2 = 0, A2 = null;
      const E2 = new Uint16Array(16), R2 = new Uint16Array(16);
      let Z2, U2, S2, D2 = null;
      for (w2 = 0; w2 <= le; w2++)
        E2[w2] = 0;
      for (b2 = 0; b2 < i2; b2++)
        E2[e2[a2 + b2]]++;
      for (p2 = l2, g2 = le; g2 >= 1 && 0 === E2[g2]; g2--)
        ;
      if (p2 > g2 && (p2 = g2), 0 === g2)
        return n2[s2++] = 20971520, n2[s2++] = 20971520, o2.bits = 1, 0;
      for (m2 = 1; m2 < g2 && 0 === E2[m2]; m2++)
        ;
      for (p2 < m2 && (p2 = m2), y2 = 1, w2 = 1; w2 <= le; w2++)
        if (y2 <<= 1, y2 -= E2[w2], y2 < 0)
          return -1;
      if (y2 > 0 && (0 === t2 || 1 !== g2))
        return -1;
      for (R2[1] = 0, w2 = 1; w2 < le; w2++)
        R2[w2 + 1] = R2[w2] + E2[w2];
      for (b2 = 0; b2 < i2; b2++)
        0 !== e2[a2 + b2] && (r2[R2[e2[a2 + b2]]++] = b2);
      if (0 === t2 ? (A2 = D2 = r2, c2 = 20) : 1 === t2 ? (A2 = he, D2 = de, c2 = 257) : (A2 = _e, D2 = fe, c2 = 0), z2 = 0, b2 = 0, w2 = m2, u2 = s2, k2 = p2, v2 = 0, _2 = -1, x2 = 1 << p2, f2 = x2 - 1, 1 === t2 && x2 > 852 || 2 === t2 && x2 > 592)
        return 1;
      for (; ; ) {
        Z2 = w2 - v2, r2[b2] + 1 < c2 ? (U2 = 0, S2 = r2[b2]) : r2[b2] >= c2 ? (U2 = D2[r2[b2] - c2], S2 = A2[r2[b2] - c2]) : (U2 = 96, S2 = 0), h2 = 1 << w2 - v2, d2 = 1 << k2, m2 = d2;
        do {
          d2 -= h2, n2[u2 + (z2 >> v2) + d2] = Z2 << 24 | U2 << 16 | S2 | 0;
        } while (0 !== d2);
        for (h2 = 1 << w2 - 1; z2 & h2; )
          h2 >>= 1;
        if (0 !== h2 ? (z2 &= h2 - 1, z2 += h2) : z2 = 0, b2++, 0 == --E2[w2]) {
          if (w2 === g2)
            break;
          w2 = e2[a2 + r2[b2]];
        }
        if (w2 > p2 && (z2 & f2) !== _2) {
          for (0 === v2 && (v2 = p2), u2 += m2, k2 = w2 - v2, y2 = 1 << k2; k2 + v2 < g2 && (y2 -= E2[k2 + v2], !(y2 <= 0)); )
            k2++, y2 <<= 1;
          if (x2 += 1 << k2, 1 === t2 && x2 > 852 || 2 === t2 && x2 > 592)
            return 1;
          _2 = z2 & f2, n2[_2] = p2 << 24 | k2 << 16 | u2 - s2 | 0;
        }
      }
      return 0 !== z2 && (n2[u2 + z2] = w2 - v2 << 24 | 64 << 16 | 0), o2.bits = p2, 0;
    };
    const { Z_FINISH: ce, Z_BLOCK: we, Z_TREES: be, Z_OK: me, Z_STREAM_END: ge, Z_NEED_DICT: pe, Z_STREAM_ERROR: ke, Z_DATA_ERROR: ve, Z_MEM_ERROR: ye, Z_BUF_ERROR: xe, Z_DEFLATED: ze } = K, Ae = 16180, Ee = 16190, Re = 16191, Ze = 16192, Ue = 16194, Se = 16199, De = 16200, Te = 16206, Oe = 16209, Ie = function(t2) {
      return (t2 >>> 24 & 255) + (t2 >>> 8 & 65280) + ((65280 & t2) << 8) + ((255 & t2) << 24);
    };
    function Fe() {
      this.strm = null, this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
    }
    const Le = function(t2) {
      if (!t2)
        return 1;
      const e2 = t2.state;
      return !e2 || e2.strm !== t2 || e2.mode < Ae || e2.mode > 16211 ? 1 : 0;
    }, Ne = function(t2) {
      if (Le(t2))
        return ke;
      const e2 = t2.state;
      return t2.total_in = t2.total_out = e2.total = 0, t2.msg = "", e2.wrap && (t2.adler = 1 & e2.wrap), e2.mode = Ae, e2.last = 0, e2.havedict = 0, e2.flags = -1, e2.dmax = 32768, e2.head = null, e2.hold = 0, e2.bits = 0, e2.lencode = e2.lendyn = new Int32Array(852), e2.distcode = e2.distdyn = new Int32Array(592), e2.sane = 1, e2.back = -1, me;
    }, Be = function(t2) {
      if (Le(t2))
        return ke;
      const e2 = t2.state;
      return e2.wsize = 0, e2.whave = 0, e2.wnext = 0, Ne(t2);
    }, Ce = function(t2, e2) {
      let a2;
      if (Le(t2))
        return ke;
      const i2 = t2.state;
      return e2 < 0 ? (a2 = 0, e2 = -e2) : (a2 = 5 + (e2 >> 4), e2 < 48 && (e2 &= 15)), e2 && (e2 < 8 || e2 > 15) ? ke : (null !== i2.window && i2.wbits !== e2 && (i2.window = null), i2.wrap = a2, i2.wbits = e2, Be(t2));
    }, Me = function(t2, e2) {
      if (!t2)
        return ke;
      const a2 = new Fe();
      t2.state = a2, a2.strm = t2, a2.window = null, a2.mode = Ae;
      const i2 = Ce(t2, e2);
      return i2 !== me && (t2.state = null), i2;
    };
    let He, je, Ke = true;
    const Pe = function(t2) {
      if (Ke) {
        He = new Int32Array(512), je = new Int32Array(32);
        let e2 = 0;
        for (; e2 < 144; )
          t2.lens[e2++] = 8;
        for (; e2 < 256; )
          t2.lens[e2++] = 9;
        for (; e2 < 280; )
          t2.lens[e2++] = 7;
        for (; e2 < 288; )
          t2.lens[e2++] = 8;
        for (ue(1, t2.lens, 0, 288, He, 0, t2.work, {
          bits: 9
        }), e2 = 0; e2 < 32; )
          t2.lens[e2++] = 5;
        ue(2, t2.lens, 0, 32, je, 0, t2.work, {
          bits: 5
        }), Ke = false;
      }
      t2.lencode = He, t2.lenbits = 9, t2.distcode = je, t2.distbits = 5;
    }, Ye = function(t2, e2, a2, i2) {
      let n2;
      const s2 = t2.state;
      return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new Uint8Array(s2.wsize)), i2 >= s2.wsize ? (s2.window.set(e2.subarray(a2 - s2.wsize, a2), 0), s2.wnext = 0, s2.whave = s2.wsize) : (n2 = s2.wsize - s2.wnext, n2 > i2 && (n2 = i2), s2.window.set(e2.subarray(a2 - i2, a2 - i2 + n2), s2.wnext), (i2 -= n2) ? (s2.window.set(e2.subarray(a2 - i2, a2), 0), s2.wnext = i2, s2.whave = s2.wsize) : (s2.wnext += n2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += n2))), 0;
    };
    var Ge = {
      inflateReset: Be,
      inflateReset2: Ce,
      inflateResetKeep: Ne,
      inflateInit: function(t2) {
        return Me(t2, 15);
      },
      inflateInit2: Me,
      inflate: function(t2, e2) {
        let a2, i2, n2, s2, r2, o2, l2, h2, d2, _2, f2, u2, c2, w2, b2, m2, g2, p2, k2, v2, y2, x2, z2 = 0;
        const A2 = new Uint8Array(4);
        let E2, R2;
        const Z2 = new Uint8Array([
          16,
          17,
          18,
          0,
          8,
          7,
          9,
          6,
          10,
          5,
          11,
          4,
          12,
          3,
          13,
          2,
          14,
          1,
          15
        ]);
        if (Le(t2) || !t2.output || !t2.input && 0 !== t2.avail_in)
          return ke;
        a2 = t2.state, a2.mode === Re && (a2.mode = Ze), r2 = t2.next_out, n2 = t2.output, l2 = t2.avail_out, s2 = t2.next_in, i2 = t2.input, o2 = t2.avail_in, h2 = a2.hold, d2 = a2.bits, _2 = o2, f2 = l2, x2 = me;
        t:
          for (; ; )
            switch (a2.mode) {
              case Ae:
                if (0 === a2.wrap) {
                  a2.mode = Ze;
                  break;
                }
                for (; d2 < 16; ) {
                  if (0 === o2)
                    break t;
                  o2--, h2 += i2[s2++] << d2, d2 += 8;
                }
                if (2 & a2.wrap && 35615 === h2) {
                  0 === a2.wbits && (a2.wbits = 15), a2.check = 0, A2[0] = 255 & h2, A2[1] = h2 >>> 8 & 255, a2.check = H(a2.check, A2, 2, 0), h2 = 0, d2 = 0, a2.mode = 16181;
                  break;
                }
                if (a2.head && (a2.head.done = false), !(1 & a2.wrap) || (((255 & h2) << 8) + (h2 >> 8)) % 31) {
                  t2.msg = "incorrect header check", a2.mode = Oe;
                  break;
                }
                if ((15 & h2) !== ze) {
                  t2.msg = "unknown compression method", a2.mode = Oe;
                  break;
                }
                if (h2 >>>= 4, d2 -= 4, y2 = 8 + (15 & h2), 0 === a2.wbits && (a2.wbits = y2), y2 > 15 || y2 > a2.wbits) {
                  t2.msg = "invalid window size", a2.mode = Oe;
                  break;
                }
                a2.dmax = 1 << a2.wbits, a2.flags = 0, t2.adler = a2.check = 1, a2.mode = 512 & h2 ? 16189 : Re, h2 = 0, d2 = 0;
                break;
              case 16181:
                for (; d2 < 16; ) {
                  if (0 === o2)
                    break t;
                  o2--, h2 += i2[s2++] << d2, d2 += 8;
                }
                if (a2.flags = h2, (255 & a2.flags) !== ze) {
                  t2.msg = "unknown compression method", a2.mode = Oe;
                  break;
                }
                if (57344 & a2.flags) {
                  t2.msg = "unknown header flags set", a2.mode = Oe;
                  break;
                }
                a2.head && (a2.head.text = h2 >> 8 & 1), 512 & a2.flags && 4 & a2.wrap && (A2[0] = 255 & h2, A2[1] = h2 >>> 8 & 255, a2.check = H(a2.check, A2, 2, 0)), h2 = 0, d2 = 0, a2.mode = 16182;
              case 16182:
                for (; d2 < 32; ) {
                  if (0 === o2)
                    break t;
                  o2--, h2 += i2[s2++] << d2, d2 += 8;
                }
                a2.head && (a2.head.time = h2), 512 & a2.flags && 4 & a2.wrap && (A2[0] = 255 & h2, A2[1] = h2 >>> 8 & 255, A2[2] = h2 >>> 16 & 255, A2[3] = h2 >>> 24 & 255, a2.check = H(a2.check, A2, 4, 0)), h2 = 0, d2 = 0, a2.mode = 16183;
              case 16183:
                for (; d2 < 16; ) {
                  if (0 === o2)
                    break t;
                  o2--, h2 += i2[s2++] << d2, d2 += 8;
                }
                a2.head && (a2.head.xflags = 255 & h2, a2.head.os = h2 >> 8), 512 & a2.flags && 4 & a2.wrap && (A2[0] = 255 & h2, A2[1] = h2 >>> 8 & 255, a2.check = H(a2.check, A2, 2, 0)), h2 = 0, d2 = 0, a2.mode = 16184;
              case 16184:
                if (1024 & a2.flags) {
                  for (; d2 < 16; ) {
                    if (0 === o2)
                      break t;
                    o2--, h2 += i2[s2++] << d2, d2 += 8;
                  }
                  a2.length = h2, a2.head && (a2.head.extra_len = h2), 512 & a2.flags && 4 & a2.wrap && (A2[0] = 255 & h2, A2[1] = h2 >>> 8 & 255, a2.check = H(a2.check, A2, 2, 0)), h2 = 0, d2 = 0;
                } else
                  a2.head && (a2.head.extra = null);
                a2.mode = 16185;
              case 16185:
                if (1024 & a2.flags && (u2 = a2.length, u2 > o2 && (u2 = o2), u2 && (a2.head && (y2 = a2.head.extra_len - a2.length, a2.head.extra || (a2.head.extra = new Uint8Array(a2.head.extra_len)), a2.head.extra.set(i2.subarray(s2, s2 + u2), y2)), 512 & a2.flags && 4 & a2.wrap && (a2.check = H(a2.check, i2, u2, s2)), o2 -= u2, s2 += u2, a2.length -= u2), a2.length))
                  break t;
                a2.length = 0, a2.mode = 16186;
              case 16186:
                if (2048 & a2.flags) {
                  if (0 === o2)
                    break t;
                  u2 = 0;
                  do {
                    y2 = i2[s2 + u2++], a2.head && y2 && a2.length < 65536 && (a2.head.name += String.fromCharCode(y2));
                  } while (y2 && u2 < o2);
                  if (512 & a2.flags && 4 & a2.wrap && (a2.check = H(a2.check, i2, u2, s2)), o2 -= u2, s2 += u2, y2)
                    break t;
                } else
                  a2.head && (a2.head.name = null);
                a2.length = 0, a2.mode = 16187;
              case 16187:
                if (4096 & a2.flags) {
                  if (0 === o2)
                    break t;
                  u2 = 0;
                  do {
                    y2 = i2[s2 + u2++], a2.head && y2 && a2.length < 65536 && (a2.head.comment += String.fromCharCode(y2));
                  } while (y2 && u2 < o2);
                  if (512 & a2.flags && 4 & a2.wrap && (a2.check = H(a2.check, i2, u2, s2)), o2 -= u2, s2 += u2, y2)
                    break t;
                } else
                  a2.head && (a2.head.comment = null);
                a2.mode = 16188;
              case 16188:
                if (512 & a2.flags) {
                  for (; d2 < 16; ) {
                    if (0 === o2)
                      break t;
                    o2--, h2 += i2[s2++] << d2, d2 += 8;
                  }
                  if (4 & a2.wrap && h2 !== (65535 & a2.check)) {
                    t2.msg = "header crc mismatch", a2.mode = Oe;
                    break;
                  }
                  h2 = 0, d2 = 0;
                }
                a2.head && (a2.head.hcrc = a2.flags >> 9 & 1, a2.head.done = true), t2.adler = a2.check = 0, a2.mode = Re;
                break;
              case 16189:
                for (; d2 < 32; ) {
                  if (0 === o2)
                    break t;
                  o2--, h2 += i2[s2++] << d2, d2 += 8;
                }
                t2.adler = a2.check = Ie(h2), h2 = 0, d2 = 0, a2.mode = Ee;
              case Ee:
                if (0 === a2.havedict)
                  return t2.next_out = r2, t2.avail_out = l2, t2.next_in = s2, t2.avail_in = o2, a2.hold = h2, a2.bits = d2, pe;
                t2.adler = a2.check = 1, a2.mode = Re;
              case Re:
                if (e2 === we || e2 === be)
                  break t;
              case Ze:
                if (a2.last) {
                  h2 >>>= 7 & d2, d2 -= 7 & d2, a2.mode = Te;
                  break;
                }
                for (; d2 < 3; ) {
                  if (0 === o2)
                    break t;
                  o2--, h2 += i2[s2++] << d2, d2 += 8;
                }
                switch (a2.last = 1 & h2, h2 >>>= 1, d2 -= 1, 3 & h2) {
                  case 0:
                    a2.mode = 16193;
                    break;
                  case 1:
                    if (Pe(a2), a2.mode = Se, e2 === be) {
                      h2 >>>= 2, d2 -= 2;
                      break t;
                    }
                    break;
                  case 2:
                    a2.mode = 16196;
                    break;
                  case 3:
                    t2.msg = "invalid block type", a2.mode = Oe;
                }
                h2 >>>= 2, d2 -= 2;
                break;
              case 16193:
                for (h2 >>>= 7 & d2, d2 -= 7 & d2; d2 < 32; ) {
                  if (0 === o2)
                    break t;
                  o2--, h2 += i2[s2++] << d2, d2 += 8;
                }
                if ((65535 & h2) != (h2 >>> 16 ^ 65535)) {
                  t2.msg = "invalid stored block lengths", a2.mode = Oe;
                  break;
                }
                if (a2.length = 65535 & h2, h2 = 0, d2 = 0, a2.mode = Ue, e2 === be)
                  break t;
              case Ue:
                a2.mode = 16195;
              case 16195:
                if (u2 = a2.length, u2) {
                  if (u2 > o2 && (u2 = o2), u2 > l2 && (u2 = l2), 0 === u2)
                    break t;
                  n2.set(i2.subarray(s2, s2 + u2), r2), o2 -= u2, s2 += u2, l2 -= u2, r2 += u2, a2.length -= u2;
                  break;
                }
                a2.mode = Re;
                break;
              case 16196:
                for (; d2 < 14; ) {
                  if (0 === o2)
                    break t;
                  o2--, h2 += i2[s2++] << d2, d2 += 8;
                }
                if (a2.nlen = 257 + (31 & h2), h2 >>>= 5, d2 -= 5, a2.ndist = 1 + (31 & h2), h2 >>>= 5, d2 -= 5, a2.ncode = 4 + (15 & h2), h2 >>>= 4, d2 -= 4, a2.nlen > 286 || a2.ndist > 30) {
                  t2.msg = "too many length or distance symbols", a2.mode = Oe;
                  break;
                }
                a2.have = 0, a2.mode = 16197;
              case 16197:
                for (; a2.have < a2.ncode; ) {
                  for (; d2 < 3; ) {
                    if (0 === o2)
                      break t;
                    o2--, h2 += i2[s2++] << d2, d2 += 8;
                  }
                  a2.lens[Z2[a2.have++]] = 7 & h2, h2 >>>= 3, d2 -= 3;
                }
                for (; a2.have < 19; )
                  a2.lens[Z2[a2.have++]] = 0;
                if (a2.lencode = a2.lendyn, a2.lenbits = 7, E2 = {
                  bits: a2.lenbits
                }, x2 = ue(0, a2.lens, 0, 19, a2.lencode, 0, a2.work, E2), a2.lenbits = E2.bits, x2) {
                  t2.msg = "invalid code lengths set", a2.mode = Oe;
                  break;
                }
                a2.have = 0, a2.mode = 16198;
              case 16198:
                for (; a2.have < a2.nlen + a2.ndist; ) {
                  for (; z2 = a2.lencode[h2 & (1 << a2.lenbits) - 1], b2 = z2 >>> 24, m2 = z2 >>> 16 & 255, g2 = 65535 & z2, !(b2 <= d2); ) {
                    if (0 === o2)
                      break t;
                    o2--, h2 += i2[s2++] << d2, d2 += 8;
                  }
                  if (g2 < 16)
                    h2 >>>= b2, d2 -= b2, a2.lens[a2.have++] = g2;
                  else {
                    if (16 === g2) {
                      for (R2 = b2 + 2; d2 < R2; ) {
                        if (0 === o2)
                          break t;
                        o2--, h2 += i2[s2++] << d2, d2 += 8;
                      }
                      if (h2 >>>= b2, d2 -= b2, 0 === a2.have) {
                        t2.msg = "invalid bit length repeat", a2.mode = Oe;
                        break;
                      }
                      y2 = a2.lens[a2.have - 1], u2 = 3 + (3 & h2), h2 >>>= 2, d2 -= 2;
                    } else if (17 === g2) {
                      for (R2 = b2 + 3; d2 < R2; ) {
                        if (0 === o2)
                          break t;
                        o2--, h2 += i2[s2++] << d2, d2 += 8;
                      }
                      h2 >>>= b2, d2 -= b2, y2 = 0, u2 = 3 + (7 & h2), h2 >>>= 3, d2 -= 3;
                    } else {
                      for (R2 = b2 + 7; d2 < R2; ) {
                        if (0 === o2)
                          break t;
                        o2--, h2 += i2[s2++] << d2, d2 += 8;
                      }
                      h2 >>>= b2, d2 -= b2, y2 = 0, u2 = 11 + (127 & h2), h2 >>>= 7, d2 -= 7;
                    }
                    if (a2.have + u2 > a2.nlen + a2.ndist) {
                      t2.msg = "invalid bit length repeat", a2.mode = Oe;
                      break;
                    }
                    for (; u2--; )
                      a2.lens[a2.have++] = y2;
                  }
                }
                if (a2.mode === Oe)
                  break;
                if (0 === a2.lens[256]) {
                  t2.msg = "invalid code -- missing end-of-block", a2.mode = Oe;
                  break;
                }
                if (a2.lenbits = 9, E2 = {
                  bits: a2.lenbits
                }, x2 = ue(1, a2.lens, 0, a2.nlen, a2.lencode, 0, a2.work, E2), a2.lenbits = E2.bits, x2) {
                  t2.msg = "invalid literal/lengths set", a2.mode = Oe;
                  break;
                }
                if (a2.distbits = 6, a2.distcode = a2.distdyn, E2 = {
                  bits: a2.distbits
                }, x2 = ue(2, a2.lens, a2.nlen, a2.ndist, a2.distcode, 0, a2.work, E2), a2.distbits = E2.bits, x2) {
                  t2.msg = "invalid distances set", a2.mode = Oe;
                  break;
                }
                if (a2.mode = Se, e2 === be)
                  break t;
              case Se:
                a2.mode = De;
              case De:
                if (o2 >= 6 && l2 >= 258) {
                  t2.next_out = r2, t2.avail_out = l2, t2.next_in = s2, t2.avail_in = o2, a2.hold = h2, a2.bits = d2, oe(t2, f2), r2 = t2.next_out, n2 = t2.output, l2 = t2.avail_out, s2 = t2.next_in, i2 = t2.input, o2 = t2.avail_in, h2 = a2.hold, d2 = a2.bits, a2.mode === Re && (a2.back = -1);
                  break;
                }
                for (a2.back = 0; z2 = a2.lencode[h2 & (1 << a2.lenbits) - 1], b2 = z2 >>> 24, m2 = z2 >>> 16 & 255, g2 = 65535 & z2, !(b2 <= d2); ) {
                  if (0 === o2)
                    break t;
                  o2--, h2 += i2[s2++] << d2, d2 += 8;
                }
                if (m2 && 0 == (240 & m2)) {
                  for (p2 = b2, k2 = m2, v2 = g2; z2 = a2.lencode[v2 + ((h2 & (1 << p2 + k2) - 1) >> p2)], b2 = z2 >>> 24, m2 = z2 >>> 16 & 255, g2 = 65535 & z2, !(p2 + b2 <= d2); ) {
                    if (0 === o2)
                      break t;
                    o2--, h2 += i2[s2++] << d2, d2 += 8;
                  }
                  h2 >>>= p2, d2 -= p2, a2.back += p2;
                }
                if (h2 >>>= b2, d2 -= b2, a2.back += b2, a2.length = g2, 0 === m2) {
                  a2.mode = 16205;
                  break;
                }
                if (32 & m2) {
                  a2.back = -1, a2.mode = Re;
                  break;
                }
                if (64 & m2) {
                  t2.msg = "invalid literal/length code", a2.mode = Oe;
                  break;
                }
                a2.extra = 15 & m2, a2.mode = 16201;
              case 16201:
                if (a2.extra) {
                  for (R2 = a2.extra; d2 < R2; ) {
                    if (0 === o2)
                      break t;
                    o2--, h2 += i2[s2++] << d2, d2 += 8;
                  }
                  a2.length += h2 & (1 << a2.extra) - 1, h2 >>>= a2.extra, d2 -= a2.extra, a2.back += a2.extra;
                }
                a2.was = a2.length, a2.mode = 16202;
              case 16202:
                for (; z2 = a2.distcode[h2 & (1 << a2.distbits) - 1], b2 = z2 >>> 24, m2 = z2 >>> 16 & 255, g2 = 65535 & z2, !(b2 <= d2); ) {
                  if (0 === o2)
                    break t;
                  o2--, h2 += i2[s2++] << d2, d2 += 8;
                }
                if (0 == (240 & m2)) {
                  for (p2 = b2, k2 = m2, v2 = g2; z2 = a2.distcode[v2 + ((h2 & (1 << p2 + k2) - 1) >> p2)], b2 = z2 >>> 24, m2 = z2 >>> 16 & 255, g2 = 65535 & z2, !(p2 + b2 <= d2); ) {
                    if (0 === o2)
                      break t;
                    o2--, h2 += i2[s2++] << d2, d2 += 8;
                  }
                  h2 >>>= p2, d2 -= p2, a2.back += p2;
                }
                if (h2 >>>= b2, d2 -= b2, a2.back += b2, 64 & m2) {
                  t2.msg = "invalid distance code", a2.mode = Oe;
                  break;
                }
                a2.offset = g2, a2.extra = 15 & m2, a2.mode = 16203;
              case 16203:
                if (a2.extra) {
                  for (R2 = a2.extra; d2 < R2; ) {
                    if (0 === o2)
                      break t;
                    o2--, h2 += i2[s2++] << d2, d2 += 8;
                  }
                  a2.offset += h2 & (1 << a2.extra) - 1, h2 >>>= a2.extra, d2 -= a2.extra, a2.back += a2.extra;
                }
                if (a2.offset > a2.dmax) {
                  t2.msg = "invalid distance too far back", a2.mode = Oe;
                  break;
                }
                a2.mode = 16204;
              case 16204:
                if (0 === l2)
                  break t;
                if (u2 = f2 - l2, a2.offset > u2) {
                  if (u2 = a2.offset - u2, u2 > a2.whave && a2.sane) {
                    t2.msg = "invalid distance too far back", a2.mode = Oe;
                    break;
                  }
                  u2 > a2.wnext ? (u2 -= a2.wnext, c2 = a2.wsize - u2) : c2 = a2.wnext - u2, u2 > a2.length && (u2 = a2.length), w2 = a2.window;
                } else
                  w2 = n2, c2 = r2 - a2.offset, u2 = a2.length;
                u2 > l2 && (u2 = l2), l2 -= u2, a2.length -= u2;
                do {
                  n2[r2++] = w2[c2++];
                } while (--u2);
                0 === a2.length && (a2.mode = De);
                break;
              case 16205:
                if (0 === l2)
                  break t;
                n2[r2++] = a2.length, l2--, a2.mode = De;
                break;
              case Te:
                if (a2.wrap) {
                  for (; d2 < 32; ) {
                    if (0 === o2)
                      break t;
                    o2--, h2 |= i2[s2++] << d2, d2 += 8;
                  }
                  if (f2 -= l2, t2.total_out += f2, a2.total += f2, 4 & a2.wrap && f2 && (t2.adler = a2.check = a2.flags ? H(a2.check, n2, f2, r2 - f2) : C(a2.check, n2, f2, r2 - f2)), f2 = l2, 4 & a2.wrap && (a2.flags ? h2 : Ie(h2)) !== a2.check) {
                    t2.msg = "incorrect data check", a2.mode = Oe;
                    break;
                  }
                  h2 = 0, d2 = 0;
                }
                a2.mode = 16207;
              case 16207:
                if (a2.wrap && a2.flags) {
                  for (; d2 < 32; ) {
                    if (0 === o2)
                      break t;
                    o2--, h2 += i2[s2++] << d2, d2 += 8;
                  }
                  if (4 & a2.wrap && h2 !== (4294967295 & a2.total)) {
                    t2.msg = "incorrect length check", a2.mode = Oe;
                    break;
                  }
                  h2 = 0, d2 = 0;
                }
                a2.mode = 16208;
              case 16208:
                x2 = ge;
                break t;
              case Oe:
                x2 = ve;
                break t;
              case 16210:
                return ye;
              default:
                return ke;
            }
        return t2.next_out = r2, t2.avail_out = l2, t2.next_in = s2, t2.avail_in = o2, a2.hold = h2, a2.bits = d2, (a2.wsize || f2 !== t2.avail_out && a2.mode < Oe && (a2.mode < Te || e2 !== ce)) && Ye(t2, t2.output, t2.next_out, f2 - t2.avail_out), _2 -= t2.avail_in, f2 -= t2.avail_out, t2.total_in += _2, t2.total_out += f2, a2.total += f2, 4 & a2.wrap && f2 && (t2.adler = a2.check = a2.flags ? H(a2.check, n2, f2, t2.next_out - f2) : C(a2.check, n2, f2, t2.next_out - f2)), t2.data_type = a2.bits + (a2.last ? 64 : 0) + (a2.mode === Re ? 128 : 0) + (a2.mode === Se || a2.mode === Ue ? 256 : 0), (0 === _2 && 0 === f2 || e2 === ce) && x2 === me && (x2 = xe), x2;
      },
      inflateEnd: function(t2) {
        if (Le(t2))
          return ke;
        let e2 = t2.state;
        return e2.window && (e2.window = null), t2.state = null, me;
      },
      inflateGetHeader: function(t2, e2) {
        if (Le(t2))
          return ke;
        const a2 = t2.state;
        return 0 == (2 & a2.wrap) ? ke : (a2.head = e2, e2.done = false, me);
      },
      inflateSetDictionary: function(t2, e2) {
        const a2 = e2.length;
        let i2, n2, s2;
        return Le(t2) ? ke : (i2 = t2.state, 0 !== i2.wrap && i2.mode !== Ee ? ke : i2.mode === Ee && (n2 = 1, n2 = C(n2, e2, a2, 0), n2 !== i2.check) ? ve : (s2 = Ye(t2, e2, a2, a2), s2 ? (i2.mode = 16210, ye) : (i2.havedict = 1, me)));
      },
      inflateInfo: "pako inflate (from Nodeca project)"
    };
    var Xe = function() {
      this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
    };
    const We = Object.prototype.toString, { Z_NO_FLUSH: qe, Z_FINISH: Je, Z_OK: Qe, Z_STREAM_END: Ve, Z_NEED_DICT: $e, Z_STREAM_ERROR: ta, Z_DATA_ERROR: ea, Z_MEM_ERROR: aa } = K;
    function ia(t2) {
      this.options = jt.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, t2 || {});
      const e2 = this.options;
      e2.raw && e2.windowBits >= 0 && e2.windowBits < 16 && (e2.windowBits = -e2.windowBits, 0 === e2.windowBits && (e2.windowBits = -15)), !(e2.windowBits >= 0 && e2.windowBits < 16) || t2 && t2.windowBits || (e2.windowBits += 32), e2.windowBits > 15 && e2.windowBits < 48 && 0 == (15 & e2.windowBits) && (e2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new Gt(), this.strm.avail_out = 0;
      let a2 = Ge.inflateInit2(this.strm, e2.windowBits);
      if (a2 !== Qe)
        throw new Error(j[a2]);
      if (this.header = new Xe(), Ge.inflateGetHeader(this.strm, this.header), e2.dictionary && ("string" == typeof e2.dictionary ? e2.dictionary = Yt.string2buf(e2.dictionary) : "[object ArrayBuffer]" === We.call(e2.dictionary) && (e2.dictionary = new Uint8Array(e2.dictionary)), e2.raw && (a2 = Ge.inflateSetDictionary(this.strm, e2.dictionary), a2 !== Qe)))
        throw new Error(j[a2]);
    }
    function na(t2, e2) {
      const a2 = new ia(e2);
      if (a2.push(t2), a2.err)
        throw a2.msg || j[a2.err];
      return a2.result;
    }
    ia.prototype.push = function(t2, e2) {
      const a2 = this.strm, i2 = this.options.chunkSize, n2 = this.options.dictionary;
      let s2, r2, o2;
      if (this.ended)
        return false;
      for (r2 = e2 === ~~e2 ? e2 : true === e2 ? Je : qe, "[object ArrayBuffer]" === We.call(t2) ? a2.input = new Uint8Array(t2) : a2.input = t2, a2.next_in = 0, a2.avail_in = a2.input.length; ; ) {
        for (0 === a2.avail_out && (a2.output = new Uint8Array(i2), a2.next_out = 0, a2.avail_out = i2), s2 = Ge.inflate(a2, r2), s2 === $e && n2 && (s2 = Ge.inflateSetDictionary(a2, n2), s2 === Qe ? s2 = Ge.inflate(a2, r2) : s2 === ea && (s2 = $e)); a2.avail_in > 0 && s2 === Ve && a2.state.wrap > 0 && 0 !== t2[a2.next_in]; )
          Ge.inflateReset(a2), s2 = Ge.inflate(a2, r2);
        switch (s2) {
          case ta:
          case ea:
          case $e:
          case aa:
            return this.onEnd(s2), this.ended = true, false;
        }
        if (o2 = a2.avail_out, a2.next_out && (0 === a2.avail_out || s2 === Ve))
          if ("string" === this.options.to) {
            let t3 = Yt.utf8border(a2.output, a2.next_out), e3 = a2.next_out - t3, n3 = Yt.buf2string(a2.output, t3);
            a2.next_out = e3, a2.avail_out = i2 - e3, e3 && a2.output.set(a2.output.subarray(t3, t3 + e3), 0), this.onData(n3);
          } else
            this.onData(a2.output.length === a2.next_out ? a2.output : a2.output.subarray(0, a2.next_out));
        if (s2 !== Qe || 0 !== o2) {
          if (s2 === Ve)
            return s2 = Ge.inflateEnd(this.strm), this.onEnd(s2), this.ended = true, true;
          if (0 === a2.avail_in)
            break;
        }
      }
      return true;
    }, ia.prototype.onData = function(t2) {
      this.chunks.push(t2);
    }, ia.prototype.onEnd = function(t2) {
      t2 === Qe && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = jt.flattenChunks(this.chunks)), this.chunks = [], this.err = t2, this.msg = this.strm.msg;
    };
    var sa = {
      Inflate: ia,
      inflate: na,
      inflateRaw: function(t2, e2) {
        return (e2 = e2 || {}).raw = true, na(t2, e2);
      },
      ungzip: na,
      constants: K
    };
    const { Deflate: ra, deflate: oa, deflateRaw: la, gzip: ha } = se, { Inflate: da, inflate: _a, inflateRaw: fa, ungzip: ua } = sa;
    var ca = ra, wa = oa, ba = la, ma = ha, ga = da, pa = _a, ka = fa, va = ua, ya = K, xa = {
      Deflate: ca,
      deflate: wa,
      deflateRaw: ba,
      gzip: ma,
      Inflate: ga,
      inflate: pa,
      inflateRaw: ka,
      ungzip: va,
      constants: ya
    };
    t.Deflate = ca, t.Inflate = ga, t.constants = ya, t.default = xa, t.deflate = wa, t.deflateRaw = ba, t.gzip = ma, t.inflate = pa, t.inflateRaw = ka, t.ungzip = va, Object.defineProperty(t, "__esModule", {
      value: true
    });
  });
})(pako$1, pako$1.exports);
var pakoExports = pako$1.exports;
var pako = /* @__PURE__ */ getDefaultExportFromCjs(pakoExports);function addMessage(arg, messageObject) {
  let decoded;
  if (arg == "edit")
    decoded = new Map(JSON.parse(pako.inflate(Buffer.from(plugin.storage.edited, "base64"), {
      to: "string"
    })));
  if (arg == "delete")
    decoded = new Map(JSON.parse(pako.inflate(Buffer.from(plugin.storage.deleted, "base64"), {
      to: "string"
    })));
  decoded.set(messageObject.id, messageObject);
  if (arg == "edit")
    plugin.storage.edited = Buffer.from(pako.deflate(JSON.stringify([
      ...decoded
    ]), {
      to: "string"
    })).toString("base64");
  if (arg == "delete")
    plugin.storage.deleted = Buffer.from(pako.deflate(JSON.stringify([
      ...decoded
    ]), {
      to: "string"
    })).toString("base64");
}
function removeMessage(arg, id) {
  let decoded;
  if (arg == "edit")
    decoded = new Map(JSON.parse(pako.inflate(Buffer.from(plugin.storage.edited, "base64"), {
      to: "string"
    })));
  if (arg == "delete")
    decoded = new Map(JSON.parse(pako.inflate(Buffer.from(plugin.storage.deleted, "base64"), {
      to: "string"
    })));
  decoded.delete(id);
  if (arg == "edit")
    plugin.storage.edited = Buffer.from(pako.deflate(JSON.stringify([
      ...decoded
    ]), {
      to: "string"
    })).toString("base64");
  if (arg == "delete")
    plugin.storage.deleted = Buffer.from(pako.deflate(JSON.stringify([
      ...decoded
    ]), {
      to: "string"
    })).toString("base64");
}
async function modifyMessage(arg, messageObject, extraThing, ahh) {
  let decodedEdited;
  let decodedDeleted;
  decodedEdited = new Map(JSON.parse(pako.inflate(Buffer.from(plugin.storage.edited, "base64"), {
    to: "string"
  })));
  decodedDeleted = new Map(JSON.parse(pako.inflate(Buffer.from(plugin.storage.deleted, "base64"), {
    to: "string"
  })));
  const editedLength = decodedEdited.size;
  const deletedLength = decodedDeleted.size;
  const totalLength = editedLength + deletedLength;
  const totalLimit = Math.round(parseFloat(`${plugin.storage.limit}`));
  if (plugin.storage.warn) {
    if (totalLength == totalLimit * 0.5) {
      alerts.showConfirmationAlert({
        title: "Message Logger Warning",
        content: `Your saved messages have reached 50% of the set limit. ${totalLength}/${totalLimit}.`,
        onConfirm: function() {
          return void 0;
        }
      });
    }
    if (totalLength == totalLimit * 0.85) {
      alerts.showConfirmationAlert({
        title: "Message Logger Warning",
        content: `Your saved messages have reached 85% of the set limit. ${totalLength}/${totalLimit}.`,
        onConfirm: function() {
          return void 0;
        }
      });
    }
    if (totalLength == totalLimit * 0.9) {
      alerts.showConfirmationAlert({
        title: "Message Logger Warning",
        content: `Your saved messages have reached 90% of the set limit. ${totalLength}/${totalLimit}.`,
        onConfirm: function() {
          return void 0;
        }
      });
    }
    if (totalLength == totalLimit * 0.99) {
      alerts.showConfirmationAlert({
        title: "Message Logger Warning",
        content: `Your saved messages have reached 99% of the set limit. ${totalLength}/${totalLimit}.`,
        onConfirm: function() {
          return void 0;
        }
      });
    }
  }
  if (totalLength < totalLimit && messageObject?.content?.length <= plugin.storage.charLimit) {
    let maybeEdited = decodedEdited.get(messageObject.id) || null;
    if (arg == "delete") {
      if (!maybeEdited) {
        decodedDeleted.set(messageObject.id, messageObject);
        plugin.storage.deleted = Buffer.from(pako.deflate(JSON.stringify([
          ...decodedDeleted
        ]), {
          to: "string"
        })).toString("base64");
      } else {
        decodedDeleted.set(messageObject.id, {
          ...messageObject,
          content: cleanEdits$3(maybeEdited.content) != cleanEdits$3(messageObject.content) ? maybeEdited.content + " `\uFF3B EDITED \uFF3D`\n\n" + (cleanEdits$3(messageObject.content) || messageObject.content) : maybeEdited.content || messageObject.content
        });
        decodedEdited.delete(messageObject.id);
        plugin.storage.edited = Buffer.from(pako.deflate(JSON.stringify([
          ...decodedEdited
        ]), {
          to: "string"
        })).toString("base64");
        plugin.storage.deleted = Buffer.from(pako.deflate(JSON.stringify([
          ...decodedDeleted
        ]), {
          to: "string"
        })).toString("base64");
      }
    } else {
      if (maybeEdited && maybeEdited.content) {
        maybeEdited.content += messageObject.content;
      } else {
        decodedEdited.set(messageObject.id, {
          ...messageObject,
          content: extraThing + messageObject.content
        });
      }
      plugin.storage.edited = Buffer.from(pako.deflate(JSON.stringify([
        ...decodedEdited
      ]), {
        to: "string"
      })).toString("base64");
    }
  } else if (totalLength >= totalLimit) {
    if (plugin.storage.warn && 9 + 10 == 21) {
      alerts.showConfirmationAlert({
        title: "Message Logger Warning",
        content: `You can no longer save any more messages as you have reached the set limit. ${totalLength}/${totalLimit}.`,
        onConfirm: function() {
          return void 0;
        }
      });
    } else {
      toasts.showToast(`Message Logger Limit Reached. ${totalLength}/${totalLimit}.`, getAssetIDByName("ic_warning_24px"));
    }
  }
}
function cleanEdits$3(msg) {
  const editInput = " 85549acb9dc8443d8f5a88dc23d6f155`\n\n";
  if (msg && typeof msg === "string" && msg.includes(editInput)) {
    let trimmed = msg;
    return `${trimmed.substring(trimmed.lastIndexOf(editInput) + editInput.length)}`;
  }
  return msg;
}const trashImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAVFBMVEUAAAC6vL+6vL+6vL65u767u7+6vb+6vL66v7+5u7+5u766u7+6vL+5vL+5vL+6vL+6vL+7vr66vcHGxsa6u766u7/IyMi6vL+5u77///+5v7+7u7/IpFUHAAAAHHRSTlMAjKDg/zxg7DCA+MD331+nv0dGEqbeDpv1AyxATyX/2gAAAJZJREFUeAHt1CUCwEAQQ9Fst8yM9z9nQZaZ56moLwNCyP2Y0MKwFRdbOIUASW5TxBZFbpMwRhBXEf4YYnwVhpdRtQVUzJPFBWRQSDdGmatCHKOsU0IUspppN8tulkUhClGIQitDjlvzmuU1y6GrfWzIFxfwMS8QFwiwgCPOCrFEEIkzogCLxEkqTkiTGEtleTEqz0DI41V1Yh2gn98sAQAAAABJRU5ErkJggg==";
const endofdeleted = "06e56823dash6945dash4281dash8a2bdashecee215cba27";function getAvatar(author) {
  try {
    return author.avatar && author.avatar != "" && author.avatar != "null" && author.avatar != "undefined" ? `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.png?size=80` : `https://cdn.discordapp.com/embed/avatars/0.png`;
  } catch (error) {
    return `https://cdn.discordapp.com/embed/avatars/0.png`;
  }
}
function stripStringAfterLastKeyword(inputString, keyword) {
  let lastKeywordIndex = inputString.lastIndexOf(keyword);
  if (lastKeywordIndex !== -1) {
    return inputString.substring(lastKeywordIndex + keyword.length);
  } else {
    return inputString;
  }
}
function stripStringFromObjects(arr, targetString) {
  const index = arr.findIndex(function(obj) {
    return (typeof obj.content === "string" ? obj.content : obj.content[0].content).includes(targetString);
  });
  if (index !== -1) {
    arr[index].content = stripStringAfterLastKeyword(typeof arr[index].content === "string" ? arr[index].content : arr[index].content[0].content, targetString);
    arr = arr.slice(index);
  }
  return arr;
}
function convertToURLParams(inputString) {
  const keyValuePairs = inputString.match(/(?:[^\s"]+|"[^"]*")+/g);
  const params = {};
  keyValuePairs.forEach(function(pair) {
    const [key, ...rest] = pair.split(":");
    const value = rest.join(":").trim();
    const finalKey = [
      "from",
      "embed",
      "after",
      "before",
      "attachment",
      "channel",
      "guild",
      "bot",
      "edited"
    ].includes(key) ? key.replace(/^"|"$/g, "") : `${key.replace(/^"|"$/g, "")}${value ? `:${value}` : ""}`;
    const finalValue = [
      "from",
      "embed",
      "after",
      "before",
      "attachment",
      "channel",
      "guild",
      "bot",
      "edited"
    ].includes(finalKey) ? value : "";
    if (params[finalKey]) {
      params[finalKey].push(finalValue);
    } else {
      params[finalKey] = [
        finalValue
      ];
    }
  });
  const adjustedParams = {};
  for (const key in params) {
    adjustedParams[key] = [
      params[key][0] !== void 0 ? params[key][0] : ""
    ];
  }
  return adjustedParams;
}
function filterSearched() {
  let map1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Map(), map2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Map(), searchQuery = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  const params = convertToURLParams(searchQuery);
  let searchInstructions = [];
  for (const key in params) {
    const values = params[key];
    if (![
      "from",
      "embed",
      "after",
      "before",
      "attachment",
      "channel",
      "guild",
      "bot",
      "edited"
    ].includes(key)) {
      map1.forEach(function(item, id) {
        if (item?.content && item?.content?.includes(key)) {
          searchInstructions.push({
            msg: id,
            type: "keyword",
            map: 1
          });
        }
      });
      map2.forEach(function(item, id) {
        if (item?.content && item?.content?.includes(key)) {
          searchInstructions.push({
            msg: id,
            type: "keyword",
            map: 2
          });
        }
      });
    } else {
      switch (key) {
        case "from":
          map1.forEach(function(item, id) {
            if (item?.author?.id == values[0] || item?.author?.username == values[0]) {
              searchInstructions.push({
                msg: id,
                type: "from",
                map: 1
              });
            }
          });
          map2.forEach(function(item, id) {
            if (item?.author?.id == values[0] || item?.author?.username == values[0]) {
              searchInstructions.push({
                msg: id,
                type: "from",
                map: 2
              });
            }
          });
          break;
        case "channel":
          map1.forEach(function(item, id) {
            if (item?.channel_id == values[0]) {
              searchInstructions.push({
                msg: id,
                type: "channel",
                map: 1
              });
            }
          });
          map2.forEach(function(item, id) {
            if (item?.channel_id == values[0]) {
              searchInstructions.push({
                msg: id,
                type: "channel",
                map: 2
              });
            }
          });
          break;
        case "guild":
          map1.forEach(function(item, id) {
            if (item?.guild_id == values[0]) {
              searchInstructions.push({
                msg: id,
                type: "guild",
                map: 1
              });
            }
          });
          map2.forEach(function(item, id) {
            if (item?.guild_id == values[0]) {
              searchInstructions.push({
                msg: id,
                type: "guild",
                map: 2
              });
            }
          });
          break;
        case "attachment":
          map1.forEach(function(item, id) {
            if (values[0] == "true" && item?.attachments?.length > 0 || values[0] == "false" && item?.attachments?.length < 1) {
              searchInstructions.push({
                msg: id,
                type: "attachment",
                map: 1
              });
            }
          });
          map2.forEach(function(item, id) {
            if (values[0] == "true" && item?.attachments?.length > 0 || values[0] == "false" && item?.attachments?.length < 1) {
              searchInstructions.push({
                msg: id,
                type: "attachment",
                map: 2
              });
            }
          });
          break;
        case "edited":
          map1.forEach(function(item, id) {
            if (values[0] == "true" && item?.edited === true || values[0] == "false" && item?.edited === false) {
              searchInstructions.push({
                msg: id,
                type: "edited",
                map: 1
              });
            }
          });
          map2.forEach(function(item, id) {
            if (values[0] == "true" && item?.edited === true || values[0] == "false" && item?.edited === false) {
              searchInstructions.push({
                msg: id,
                type: "edited",
                map: 2
              });
            }
          });
          break;
        case "bot":
          map1.forEach(function(item, id) {
            if (values[0] == "true" && item?.bot === true || values[0] == "false" && item?.bot === false) {
              searchInstructions.push({
                msg: id,
                type: "bot",
                map: 1
              });
            }
          });
          map2.forEach(function(item, id) {
            if (values[0] == "true" && item?.bot === true || values[0] == "false" && item?.bot === false) {
              searchInstructions.push({
                msg: id,
                type: "bot",
                map: 2
              });
            }
          });
          break;
        case "embed":
          map1.forEach(function(item, id) {
            if (values[0] == "true" && item?.embeds?.length > 0 || values[0] == "false" && item?.embeds?.length < 1) {
              searchInstructions.push({
                msg: id,
                type: "embed",
                map: 1
              });
            }
          });
          map2.forEach(function(item, id) {
            if (values[0] == "true" && item?.embeds?.length > 0 || values[0] == "false" && item?.embeds?.length < 1) {
              searchInstructions.push({
                msg: id,
                type: "embed",
                map: 2
              });
            }
          });
          break;
        case "before":
          map1.forEach(function(item, id) {
            if (new Date(item.dateofaction * 1e3) < new Date(values[0] * (/^[+-]?\d+(\.\d+)?$/.test(values[0]) ? 1e3 : 1))) {
              searchInstructions.push({
                msg: id,
                type: "before",
                map: 1
              });
            }
          });
          map2.forEach(function(item, id) {
            if (new Date(item.dateofaction * 1e3) < new Date(values[0] * (/^[+-]?\d+(\.\d+)?$/.test(values[0]) ? 1e3 : 1))) {
              searchInstructions.push({
                msg: id,
                type: "before",
                map: 2
              });
            }
          });
          break;
        case "after":
          map1.forEach(function(item, id) {
            if (new Date(item.dateofaction * 1e3) > new Date(values[0] * (/^[+-]?\d+(\.\d+)?$/.test(values[0]) ? 1e3 : 1))) {
              searchInstructions.push({
                msg: id,
                type: "after",
                map: 1
              });
            }
          });
          map2.forEach(function(item, id) {
            if (new Date(item.dateofaction * 1e3) > new Date(values[0] * (/^[+-]?\d+(\.\d+)?$/.test(values[0]) ? 1e3 : 1))) {
              searchInstructions.push({
                msg: id,
                type: "after",
                map: 2
              });
            }
          });
          break;
        default:
          map1.forEach(function(item, id) {
            if (item?.content && item?.content?.includes(key)) {
              searchInstructions.push({
                msg: id,
                type: "keyword",
                map: 1
              });
            }
          });
          map2.forEach(function(item, id) {
            if (item?.content && item?.content?.includes(key)) {
              searchInstructions.push({
                msg: id,
                type: "keyword",
                map: 2
              });
            }
          });
      }
    }
  }
  function sortSearchInstructions(array) {
    function sortInstructions(instructions) {
      function removeDuplicates(arr) {
        const uniqueMsgs = /* @__PURE__ */ new Set();
        return arr.filter(function(obj) {
          if (uniqueMsgs.has(obj.msg)) {
            return false;
          }
          uniqueMsgs.add(obj.msg);
          return true;
        });
      }
      instructions.sort(function(a, b) {
        if (a.type === "keyword" && b.type !== "keyword") {
          return -1;
        } else if (a.type !== "keyword" && b.type === "keyword") {
          return 1;
        } else if (a.type === "keyword" && b.type === "keyword") {
          return 0;
        }
        return 0;
      });
      return removeDuplicates(instructions);
    }
    const types = Array.from(new Set(array.map(function(obj) {
      return obj.type;
    })));
    const commonMsgIds = array.reduce(function(commonIds, obj) {
      if (!commonIds[obj.msg]) {
        commonIds[obj.msg] = /* @__PURE__ */ new Set([
          obj.type
        ]);
      } else {
        commonIds[obj.msg].add(obj.type);
      }
      return commonIds;
    }, {});
    const filteredArray = array.filter(function(obj) {
      return types.every(function(type) {
        return commonMsgIds[obj.msg]?.has(type);
      });
    });
    const uniqueMsgIds = Array.from(new Set(filteredArray.map(function(obj) {
      return obj.msg;
    })));
    return sortInstructions(filteredArray.filter(function(obj) {
      return uniqueMsgIds.includes(obj.msg);
    }).map(function(obj) {
      return {
        msg: obj.msg,
        map: obj.map
      };
    }));
  }
  searchInstructions = sortSearchInstructions(searchInstructions);
  searchInstructions.forEach(function(object) {
    if (object.map == 1) {
      map1.delete(object.msg);
    }
    if (object.map == 2) {
      map2.delete(object.msg);
    }
  });
  return {
    filteredMap1: map1,
    filteredMap2: map2
  };
}
function convertTimestamps(inputString) {
  if (!inputString.includes("<t:"))
    return inputString;
  var timestampRegex = /<t:(\d+):([tTdfDFR])>/g;
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var outputString = inputString.replace(timestampRegex, function(match, timestamp, format) {
    var date = new Date(parseInt(timestamp) * 1e3);
    var formattedTime;
    switch (format) {
      case "t":
        formattedTime = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
        break;
      case "T":
        formattedTime = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
        break;
      case "d":
        formattedTime = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
        break;
      case "D":
        formattedTime = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
        break;
      case "f":
        formattedTime = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
        break;
      case "F":
        formattedTime = dayNames[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
        break;
      case "R":
        var now = new Date();
        var timeDifference = date - now;
        if (timeDifference < 0) {
          var yearsAgo = now.getFullYear() - date.getFullYear();
          formattedTime = yearsAgo + " years ago";
        } else {
          var yearsAhead = date.getFullYear() - now.getFullYear();
          formattedTime = "in " + yearsAhead + " years";
        }
        break;
      default:
        formattedTime = match;
    }
    return formattedTime;
  });
  return outputString;
}
function addMentions(messageContent) {
  const UserStore = vendetta.metro.findByStoreName("UserStore");
  let replacedMessage;
  try {
    replacedMessage = messageContent.replace(/<@(\w+)>/g, function(match, userId) {
      const user = UserStore.getUser(userId);
      return user ? `@${user?.globalName || user?.username}` : match;
    });
  } catch (error) {
  }
  return replacedMessage || messageContent;
}
function stripMarkdown(text) {
  try {
    try {
      text = convertTimestamps(text);
    } catch (error) {
    }
    try {
      text = addMentions(text);
    } catch (error) {
    }
    const regexList = [
      // Headers
      /^\s*#{1,6}\s/gm,
      // Emphasis (e.g., *italic* or _italic_)
      /[\*|_]{1,2}/g,
      // Strikethrough (e.g., ~~strikethrough~~)
      /~{2}/g,
      // Code spans (e.g., `code`)
      /`{1,3}/g,
      // Images (e.g., ![alt text](url) or ![alt text][reference])
      // /\!\[.*?(\]|\))/g,
      // Links (e.g., [text](url) or [text][reference])
      // /\[.*?(\]|\))/g,
      // Blockquotes (e.g., > blockquote)
      /^\s*> /gm,
      // Unordered lists (e.g., * item)
      /^\s*[\*\-\+]\s/gm,
      // Ordered lists (e.g., 1. item)
      // /^\s*\d+\.\s/gm,
      // Horizontal rules (e.g., ---)
      // /^-+$/gm,
      // Footnotes (e.g., [^footnote])
      // /\[\^.*?(\]|$)/g,
      // Abbreviations (e.g., *[abbr]: description)
      // /\*\[.*?\]:\s.*$/gm,
      // Fenced code blocks (e.g., ``` code block ```)
      /`{3,}.*\n/g
    ];
    for (const regex of regexList) {
      text = text.replace(regex, "");
    }
    return text;
  } catch (error) {
    return error;
  }
}
function formatTimestamp(timestampString) {
  const inputDate = new Date(Date.parse(timestampString));
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: false
  };
  if (inputDate.toDateString() === today.toDateString()) {
    return `Today at ${inputDate.toLocaleTimeString("en-US", options)}`;
  } else if (inputDate.toDateString() === yesterday.toDateString()) {
    return `Yesterday at ${inputDate.toLocaleTimeString("en-US", options)}`;
  } else {
    return `${inputDate.getDate()}/${inputDate.getMonth() + 1}/${inputDate.getFullYear()} ${inputDate.toLocaleTimeString("en-US", options)}`;
  }
}
function getGuildName(guildId) {
  const guilds = vendetta.metro.findByProps("getGuilds").getGuilds();
  if (guilds[guildId]) {
    return guilds[guildId].name;
  } else {
    return null;
  }
}
function isValidDiscordUsername(username) {
  username = username.slice(1).trim().replace(/\s+/g, "");
  username = username.toLowerCase();
  if (username.length < 2 || username.length > 32) {
    return false;
  }
  const forbiddenSubstrings = [
    "@",
    "#",
    ":",
    "```",
    "discord"
  ];
  if (forbiddenSubstrings.some(function(substring) {
    return username.includes(substring);
  })) {
    return false;
  }
  const forbiddenNames = [
    "everyone",
    "here"
  ];
  if (forbiddenNames.includes(username)) {
    return false;
  }
  if (!/^[a-zA-Z0-9._]+$/.test(username)) {
    return false;
  }
  return true;
}
function embedToText(obj) {
  try {
    let recursiveRaw = function(object) {
      let result = "";
      for (const key in object) {
        if (key.startsWith("raw") || key.startsWith("name") && typeof key.startsWith("name") === "string" || key.startsWith("value") && typeof key.startsWith("value") === "string" || key.startsWith("url") && typeof key.startsWith("url") === "string" || key.startsWith("icon") && typeof key.startsWith("icon") === "string" || key.startsWith("text") && typeof key.startsWith("text") === "string") {
          result += object[key] + "\n";
        }
        if (typeof object[key] === "object") {
          result += recursiveRaw(object[key]);
        }
      }
      return result;
    };
    if (!obj)
      return "";
    if (Array.isArray(obj) && obj.length > 0) {
      return "\n\n" + obj.map(function(embed) {
        return recursiveRaw(embed);
      }).join("\n\n");
    }
    return "\n\n" + recursiveRaw(obj).replace(/\n+$/, "");
  } catch (error) {
  }
}
function searchMessages(joinedLogs, query) {
  if (query.replace(/\s/g, "") != "") {
    const keywords = query.match(/(?:[^\s"]+|"[^"]*")+/g);
    joinedLogs = joinedLogs.filter(function(msg) {
      const content = msg?.content?.normalize("NFKC")?.toLowerCase();
      const username = msg?.author?.username?.normalize("NFKC")?.toLowerCase();
      const globalname = msg?.author?.globalName?.normalize("NFKC")?.toLowerCase();
      const userid = `${msg?.author?.id}`;
      let includeMessage = false;
      for (const keyword of keywords) {
        const normalizedKeyword = keyword?.normalize("NFKC")?.toLowerCase().replace(/"/g, "");
        if (content && content.includes(normalizedKeyword) || username && username.includes(normalizedKeyword) || globalname && globalname.includes(normalizedKeyword) || userid && userid == normalizedKeyword) {
          includeMessage = true;
          break;
        }
      }
      return includeMessage;
    });
  }
  return joinedLogs;
}function logStuff$2(stuff) {
  _vendetta.logger.log(stuff);
}
const edit$1 = " `\uFF3B EDITED at %t 85549acb9dc8443d8f5a88dc23d6f155`\n\n";
const editInput$1 = " 85549acb9dc8443d8f5a88dc23d6f155`\n\n";
const downloadStuff = metro.findByProps("downloadMediaAsset");
const MessageStore$1 = metro.findByProps("getMessage", "getMessages");
const UserStore$1 = metro.findByStoreName("UserStore");
const ChannelStore$1 = metro.findByProps("getChannel", "getDMFromUserId");
const SelectedChannelStore = metro.findByStoreName("SelectedChannelStore");
let lastDeletedId = null;
let lastEditedTimestamp = "";
plugin.storage.deleted ??= "eJyLjgUAARUAuQ==";
plugin.storage.edited ??= "eJyLjgUAARUAuQ==";
plugin.storage.mode ??= false;
plugin.storage.exactMatch ??= false;
plugin.storage.wordList ??= [];
plugin.storage.userList ??= [];
plugin.storage.channelList ??= [];
plugin.storage.guildList ??= [];
plugin.storage.onlyStorageBlock ??= false;
plugin.storage.saveDelete ??= true;
plugin.storage.saveEdit ??= true;
plugin.storage.logEdit ??= true;
plugin.storage.logDelete ??= true;
plugin.storage.autoDownload ??= false;
plugin.storage.onlyLog ??= false;
plugin.storage.dontAuthor ??= false;
plugin.storage.dontBot ??= false;
plugin.storage.dontPK ??= false;
plugin.storage.logReaction ??= false;
plugin.storage.warn ??= true;
plugin.storage.limit ??= 1024;
plugin.storage.charLimit ??= 4e3;
plugin.storage.textColour ??= "#d95547";
plugin.storage.backgroundColour ??= "#d95547";
plugin.storage.gutterColour ??= "#d95547";
plugin.storage.backgroundAlpha ??= 34;
plugin.storage.deletedText ??= "This message was deleted at %t";
plugin.storage.baseIcon ??= "";
function patchLogging() {
  patcher.before("dispatch", common.FluxDispatcher, function(args) {
    const [event] = args;
    if (plugin.storage.logReaction && event.type === "MESSAGE_REACTION_ADD" && event.colors) {
      let reactionAlert;
      let reactionImg = null;
      let original = MessageStore$1.getMessage(event?.channelId, event?.messageId);
      if (original?.author?.id != UserStore$1.getCurrentUser()?.id)
        return args;
      if (event?.emoji?.id) {
        reactionImg = {
          uri: `https://cdn.discordapp.com/emojis/${event?.emoji?.id}.webp`
        };
      }
      reactionAlert = `@${UserStore$1.getUser(event?.userId)} reacted to your message with ${event?.emoji?.name}`;
      toasts.showToast(reactionAlert, reactionImg);
    }
    if (plugin.storage.logReaction && event.type === "MESSAGE_REACTION_REMOVE" && event.colors) {
      let reactionAlert;
      let reactionImg = null;
      let original = MessageStore$1.getMessage(event?.channelId, event?.messageId);
      if (original?.author?.id != UserStore$1.getCurrentUser()?.id)
        return args;
      if (event?.emoji?.id) {
        reactionImg = {
          uri: `https://cdn.discordapp.com/emojis/${event?.emoji?.id}.webp`
        };
      }
      reactionAlert = `@${UserStore$1.getUser(event?.userId)} removed their reaction to your message`;
      toasts.showToast(reactionAlert, reactionImg);
    }
    if (event.type === "MESSAGE_DELETE") {
      if (event?.dont_log || event?.__vml_cleanup || event?.otherPluginBypass || event?.removeHistory || event?.log_edit === false)
        return args;
      const deletedLogDate = new Date().toLocaleTimeString("en-US", {
        hour12: false
      });
      let original = MessageStore$1.getMessage(event?.channelId, event?.id);
      if (!original || original?.author?.id == "1" || original?.flags & 1 << 16 !== 0 || !original.id)
        return args;
      if (plugin.storage.dontAuthor && original?.author?.id == UserStore$1.getCurrentUser()?.id || plugin.storage.onlyLog && original?.channel_id != SelectedChannelStore.getChannelId() || plugin.storage.dontBot && message?.author.bot)
        return args;
      const modeCheck = !!plugin.storage.mode;
      const exactMatch = !!plugin.storage.exactMatch;
      const usrLst = [
        ...plugin.storage.userList
      ];
      const chLst = [
        ...plugin.storage.channelList
      ];
      const srvLst = [
        ...plugin.storage.guildList
      ];
      const wrdLst = [
        ...plugin.storage.wordList
      ];
      let userListCheck = false;
      let channelListCheck = false;
      let guildListCheck = false;
      let wordListCheck = false;
      if (usrLst.length > 0) {
        if (usrLst.includes(`@${original?.author?.username}`) || usrLst.includes(original?.author?.id)) {
          userListCheck = true;
        }
      } else if (modeCheck) {
        userListCheck = true;
      }
      if (chLst.length > 0) {
        if (chLst.includes(original?.channel_id)) {
          channelListCheck = true;
        }
      } else if (modeCheck) {
        channelListCheck = true;
      }
      if (srvLst.length > 0) {
        if (srvLst.includes(ChannelStore$1.getChannel(original?.channel_id)?.guild_id)) {
          guildListCheck = true;
        }
      } else if (modeCheck) {
        guildListCheck = true;
      }
      if (wrdLst.length > 0) {
        if (wrdLst.some(function(word) {
          return `${exactMatch ? original?.content : original?.content?.normalize("NFD")?.toLowerCase()}`.includes(`${exactMatch ? word?.replace(/%n%/g, "\n") : word?.normalize("NFD")?.toLowerCase()?.replace(/%n%/g, "\n")}`);
        })) {
          wordListCheck = true;
        }
      } else if (modeCheck) {
        wordListCheck = true;
      }
      if (original && original?.attachments?.length > 0 && plugin.storage.autoDownload && lastDeletedId != original?.id) {
        try {
          original?.attachments?.forEach(async function(item) {
            const url = typeof item === "string" ? item : item.url;
            if (item.size <= 8e6) {
              await downloadStuff.downloadMediaAsset(url, 0);
            }
          });
        } catch (error) {
          logStuff$2("hmm" + error);
        }
      }
      (async function() {
        try {
          if (plugin.storage.dontPK) {
            if (await isPK(original)) {
              common.FluxDispatcher.dispatch({
                type: "MESSAGE_DELETE",
                id: original?.id,
                channelId: original?.channel_id,
                dont_log: true
              });
            }
          }
        } catch (error) {
          logStuff$2("hmm" + error);
        }
        if (modeCheck && (userListCheck || channelListCheck || guildListCheck || wordListCheck) || !modeCheck && !(userListCheck || channelListCheck || guildListCheck || wordListCheck)) {
          try {
            if (plugin.storage.saveDelete) {
              const msgId = `${original?.id}`;
              const extractedProperties = extractProperties$1(original) || "failure";
              if (extractedProperties == "failure")
                logStuff$2("hmm ahhhhhh");
              if (msgId && lastDeletedId != msgId) {
                lastDeletedId = msgId;
                await modifyMessage("delete", {
                  ...extractedProperties,
                  content: `${original?.content}`,
                  guild_id: ChannelStore$1.getChannel(original?.channel_id).guild_id,
                  dateofaction: `${Math.floor(Date.now() / 1e3)}`,
                  embeds: original?.embeds,
                  edited: original?.editedTimestamp != null
                });
              }
            }
          } catch (error) {
            logStuff$2("hmm_" + error);
          }
        }
      })();
      if (!plugin.storage.onlyStorageBlock && (modeCheck && !(userListCheck || channelListCheck || guildListCheck || wordListCheck) || !modeCheck && (userListCheck || channelListCheck || guildListCheck || wordListCheck)))
        return args;
      if (!plugin.storage.logDelete)
        return args;
      try {
        args[0] = {
          type: "MESSAGE_UPDATE",
          channelId: original?.channel_id,
          message: {
            ...original,
            content: `${JSON.stringify({
              deletedText: `${plugin.storage.deletedText}`.replace(/%t/g, deletedLogDate.toString()),
              textColour: `${plugin.storage.textColour}`,
              backgroundColour: `${plugin.storage.backgroundColour}${Math.round(parseFloat(`${plugin.storage.backgroundAlpha}`)).toString(16).padStart(2, "0")}`,
              gutterColour: `${plugin.storage.gutterColour}`,
              trashIcon: `${plugin.storage.baseIcon || ""}`.trim() != "" ? `${plugin.storage.baseIcon}` : trashImg
            })}${endofdeleted}\u200C${(original?.content || "").split(endofdeleted).pop()}`,
            /*type: 0,*/
            //flags: 64,
            channel_id: original?.channel_id,
            guild_id: ChannelStore$1?.getChannel(original?.channel_id)?.guild_id,
            edited_timestamp: original?.edited_timestamp || original?.editedTimestamp || null,
            state: "SENT",
            //timestamp: deletedLogDate
            embeds: null,
            messageReference: null
          },
          dont_log: true,
          optimistic: false,
          sendMessageOptions: {},
          isPushNotification: false
        };
      } catch (error) {
        logStuff$2("hmm" + error);
        logStuff$2(error);
      }
      return args;
    }
    if (event.type === "MESSAGE_UPDATE") {
      if (event?.dont_log || event?.__vml_cleanup || event?.otherPluginBypass || event?.removeHistory || event?.log_edit === false)
        return args;
      let message1 = event?.message;
      if (!message1 || !message1.id || !message1.content || !message1.edited_timestamp || message1?.embeds?.length > 0 && message1?.author.bot || plugin.storage.dontAuthor && message1?.author?.id == UserStore$1.getCurrentUser()?.id || plugin.storage.onlyLog && message1?.channel_id != SelectedChannelStore.getChannelId() || plugin.storage.dontBot && message1?.author.bot || message1?.content == "")
        return args;
      let original = MessageStore$1.getMessage(message1?.channel_id, message1?.id);
      let newContent;
      if (!original)
        return args;
      const modeCheck = !!plugin.storage.mode;
      const exactMatch = !!plugin.storage.exactMatch;
      const usrLst = [
        ...plugin.storage.userList
      ];
      const chLst = [
        ...plugin.storage.channelList
      ];
      const srvLst = [
        ...plugin.storage.guildList
      ];
      const wrdLst = [
        ...plugin.storage.wordList
      ];
      let userListCheck = false;
      let channelListCheck = false;
      let guildListCheck = false;
      let wordListCheck = false;
      if (usrLst.length > 0) {
        if (usrLst.includes(`@${original?.author?.username}`) || usrLst.includes(original?.author?.id)) {
          userListCheck = true;
        }
      } else if (modeCheck) {
        userListCheck = true;
      }
      if (chLst.length > 0) {
        if (chLst.includes(original?.channel_id)) {
          channelListCheck = true;
        }
      } else if (modeCheck) {
        channelListCheck = true;
      }
      if (srvLst.length > 0) {
        if (srvLst.includes(ChannelStore$1.getChannel(original?.channel_id)?.guild_id)) {
          guildListCheck = true;
        }
      } else if (modeCheck) {
        guildListCheck = true;
      }
      if (wrdLst.length > 0) {
        if (wrdLst.some(function(word) {
          return `${exactMatch ? original?.content : original?.content?.normalize("NFD")?.toLowerCase()}`.includes(`${exactMatch ? word?.replace(/%n%/g, "\n") : word?.normalize("NFD")?.toLowerCase()?.replace(/%n%/g, "\n")}`);
        })) {
          wordListCheck = true;
        }
      } else if (modeCheck) {
        wordListCheck = true;
      }
      if (modeCheck && (userListCheck || channelListCheck || guildListCheck || wordListCheck) || !modeCheck && !(userListCheck || channelListCheck || guildListCheck || wordListCheck)) {
        (async function() {
          try {
            const msgId = `${original?.id}`;
            const updatedContent = cleanEdits$2(message1.content);
            if (updatedContent && message1.edited_timestamp && message1?.edited_timestamp != lastEditedTimestamp) {
              lastEditedTimestamp = message1?.edited_timestamp;
              await modifyMessage("edit", {
                ...extractProperties$1(original),
                content: (message1?.edited_timestamp ? edit$1.replace(/%t/g, `<t:${Math.floor(Date.parse(message1?.edited_timestamp) / 1e3)}:T>`) : " `\uFF3B EDITED 85549acb9dc8443d8f5a88dc23d6f155`\n\n") + updatedContent,
                guild_id: ChannelStore$1.getChannel(original?.channel_id).guild_id,
                attachments: original?.attachments,
                edited: message1.edited_timestamp != null,
                dateofaction: `${Math.floor(Date.now() / 1e3)}`
              }, original?.content);
            }
          } catch (error) {
            logStuff$2("hmm" + error);
            logStuff$2("hmm" + error);
          }
        })();
      }
      if (!plugin.storage.onlyStorageBlock && (modeCheck && !(userListCheck || channelListCheck || guildListCheck || wordListCheck) || !modeCheck && (userListCheck || channelListCheck || guildListCheck || wordListCheck)))
        return args;
      if (!plugin.storage.logEdit)
        return args;
      if (message1 && message1?.content && original && original?.content) {
        newContent = original?.content + (message1?.edited_timestamp ? edit$1.replace(/%t/g, convertTimestamps(`<t:${Math.floor(Date.parse(message1?.edited_timestamp) / 1e3)}:T>`)) : " `\uFF3B EDITED 85549acb9dc8443d8f5a88dc23d6f155`\n\n") + message1?.content;
        args[0] = {
          type: "MESSAGE_UPDATE",
          message: {
            ...message1,
            content: `${newContent}`,
            guild_id: ChannelStore$1?.getChannel(original?.channel_id)?.guild_id
          },
          dont_log: true
        };
      }
    }
    return args;
  });
}
function extractProperties$1(original) {
  try {
    original && original?.attachments && original?.stickerItems && original?.stickerItems[0] && original?.stickerItems[0].id && original?.attachments.push({
      id: `${original?.stickerItems[0]?.id}`,
      filename: `${original?.stickerItems[0]?.name}`,
      size: 14047,
      url: `https://discord.com/stickers/${original?.stickerItems[0].id}.png`,
      proxy_url: `https://discord.com/stickers/${original?.stickerItems[0].id}.png`,
      width: 446,
      height: 353,
      content_type: "image/gif",
      content_scan_version: 1,
      placeholder: "aQgKDoL4VHmehohnlXmJd4eJGGCXAnU=",
      placeholder_version: 1,
      spoiler: false
    });
    return {
      id: `${original?.id}`,
      channel_id: `${original?.channel_id}`,
      author: {
        id: `${original?.author?.id}`,
        avatar: `${original?.author?.avatar}`,
        username: original?.author?.username,
        discriminator: `${original?.author?.discriminator}`,
        globalName: original?.author?.globalName,
        bot: original?.author?.bot,
        verified: (JSON.parse(JSON.stringify(original)).author?.publicFlags & 1 << 16) !== 0
      },
      attachments: original?.attachments,
      timestamp: original?.timestamp
    };
  } catch (error) {
    logStuff$2("hmmmm_m" + error);
    return "failure";
  }
}
function cleanEdits$2(msg) {
  if (msg && typeof msg === "string" && msg.includes(editInput$1)) {
    let trimmed = msg;
    return `${trimmed.substring(trimmed.lastIndexOf(editInput$1) + editInput$1.length)}`;
  }
  return msg;
}
async function isPK(message1) {
  const response = await fetch(`https://api.pluralkit.me/v2/messages/${encodeURIComponent(message1.id)}`);
  const data = await response.json();
  return message1.id === data.original && !data.member?.keep_proxy;
}metro.findByName("MessageRecord", false);
const { DCDChatManager } = common.ReactNative.NativeModules;
metro.findByProps("updateMessageRecord", "createMessageRecord");
const MessageStore = metro.findByProps("getMessage", "getMessages");
const ThemeStore$3 = metro.findByStoreName("ThemeStore");
function patchRow() {
  patcher.before("updateRows", DCDChatManager, function(r) {
    let rows = JSON.parse(r[1]);
    function transformObject(obj, inputColor) {
      try {
        let transformObj = function(obj2, inputColor2) {
          const charColor = inputColor2?.toString();
          const compTypes = [
            "text",
            "heading",
            "s",
            "u",
            "em",
            "strong",
            "list",
            "blockQuote"
          ];
          if (Array.isArray(obj2)) {
            return obj2.map(function(data) {
              return transformObj(data, charColor);
            });
          } else if (typeof obj2 === "object" && obj2 !== null) {
            const { content, type, target, items } = obj2;
            try {
              if (typeof obj2.content == "string") {
                obj2.content = obj2.content.replace(/85549acb9dc8443d8f5a88dc23d6f155/g, "\uFF3D");
              } else {
                obj2.content[0].content = obj2.content[0].content.replace(/85549acb9dc8443d8f5a88dc23d6f155/g, "\uFF3D");
              }
            } catch (error) {
            }
            if (!compTypes.includes(type))
              return obj2;
            try {
              if (type === "text" && content && content.length >= 1) {
                return {
                  content: [
                    {
                      content,
                      type: "text"
                    }
                  ],
                  target: "usernameOnClick",
                  type: "link",
                  context: {
                    username: 1,
                    medium: true,
                    usernameOnClick: {
                      action: "0",
                      userId: "0",
                      linkColor: common.ReactNative.processColor(charColor),
                      messageChannelId: "0"
                    }
                  }
                };
              }
            } catch (error) {
              return obj2;
            }
            const updatedContent = transformObj(content, charColor);
            const updatedItems = items ? items.map(transformObj, charColor) : void 0;
            try {
              if (updatedContent !== content || updatedItems !== items || !compTypes.includes(type)) {
                const updatedObj = {
                  ...obj2,
                  content: updatedContent
                };
                if (type === "blockQuote" && target) {
                  updatedObj.content = updatedContent;
                  updatedObj.target = target;
                }
                if (type === "list") {
                  if (updatedObj?.content) {
                    delete updatedObj.content;
                  }
                }
                if (items) {
                  updatedObj.items = updatedItems;
                }
                return updatedObj;
              }
            } catch (error) {
              return obj2;
            }
          }
          return obj2;
        };
        if (!inputColor) {
          let transformObj2 = function(obj2, inputColor2) {
            const charColor = inputColor2?.toString();
            const compTypes = [
              "text",
              "heading",
              "s",
              "u",
              "em",
              "strong",
              "list",
              "blockQuote"
            ];
            if (Array.isArray(obj2)) {
              return obj2.reverse().map(function(data) {
                return transformObj2(data, charColor);
              });
            } else if (typeof obj2 === "object" && obj2 !== null) {
              const { content, type, target, items } = obj2;
              try {
                if (/［\s*EDITED at \d{2}:\d{2}:\d{2}\s*85549acb9dc8443d8f5a88dc23d6f155/g.test(typeof obj2.content === "string" ? obj2.content : obj2.content[0].content)) {
                  hasMatched = true;
                }
              } catch (error) {
              }
              try {
                if (typeof obj2.content == "string") {
                  obj2.content = obj2.content.replace(/85549acb9dc8443d8f5a88dc23d6f155/g, "\uFF3D");
                } else {
                  obj2.content[0].content = obj2.content[0].content.replace(/85549acb9dc8443d8f5a88dc23d6f155/g, "\uFF3D");
                }
              } catch (error) {
              }
              if (!compTypes.includes(type))
                return obj2;
              try {
                if (hasMatched) {
                  return {
                    content: [
                      {
                        ...type === "text" ? {
                          content: typeof content === "string" ? content : content[0].content,
                          type: "text"
                        } : {
                          content: [
                            {
                              content: typeof content === "string" ? content : content[0].content,
                              type: "text"
                            }
                          ],
                          type
                        }
                      }
                    ],
                    target: "usernameOnClick",
                    type: "link",
                    context: {
                      username: 1,
                      medium: true,
                      usernameOnClick: {
                        action: "0",
                        userId: "0",
                        linkColor: common.ReactNative.processColor(charColor),
                        messageChannelId: "0"
                      }
                    }
                  };
                }
              } catch (error) {
                return obj2;
              }
              try {
                const updatedContent = transformObj2(content, charColor);
                const updatedItems = items ? items.map(function(item) {
                  return transformObj2(item, charColor);
                }) : void 0;
                if (updatedContent !== content || updatedItems !== items || !compTypes.includes(type)) {
                  const updatedObj = {
                    ...obj2,
                    content: updatedContent
                  };
                  if (type === "blockQuote" && target) {
                    updatedObj.target = target;
                  }
                  if (type === "list" && updatedObj?.content) {
                    delete updatedObj.content;
                  }
                  if (items) {
                    updatedObj.items = updatedItems;
                  }
                  return updatedObj;
                }
              } catch (error) {
                return obj2;
              }
            }
            return obj2;
          };
          inputColor = ThemeStore$3.theme === "darker" || ThemeStore$3.theme === "amoled" || ThemeStore$3.theme === "dark" ? "#DADEE18D" : "#3233378D";
          let hasMatched = false;
          return transformObj2(obj, inputColor).reverse();
        }
        return transformObj(obj, inputColor);
      } catch (error) {
        return obj;
      }
    }
    rows.forEach(function(row) {
      if (row?.type == 1) {
        const original = MessageStore.getMessage(row?.message?.channelId, row?.message?.id);
        let split;
        if (original?.content?.includes(" 85549acb9dc8443d8f5a88dc23d6f155`\n\n") && original.content.indexOf(endofdeleted) === -1) {
          row.message.content = transformObject(row?.message?.content);
        }
        if (typeof original?.content === "string" && original.content.indexOf(endofdeleted) !== -1)
          split = original?.content?.split(endofdeleted);
        if (split) {
          const deletedStuff = JSON.parse(split[0]);
          try {
            row.message.embeds = row.message.embeds || [];
            row.message.embeds.unshift({
              type: "text",
              messageSendError: deletedStuff?.deletedText,
              failureState: 2,
              disableBackgroundColor: true,
              bodyTextColor: ThemeStore$3.theme === "darker" || ThemeStore$3.theme === "amoled" || ThemeStore$3.theme === "dark" ? -7038044 : 5987941,
              iconURL: deletedStuff?.trashIcon
            });
            try {
              if (split[1] != "") {
                row.message.content = stripStringFromObjects(row.message.content, endofdeleted);
              } else {
                delete row.message.content;
              }
            } catch (error) {
            }
          } catch (error) {
          }
          row.message.content = transformObject(row?.message?.content, deletedStuff?.textColour);
          row.backgroundHighlight = {
            backgroundColor: common.ReactNative.processColor(deletedStuff?.backgroundColour),
            gutterColor: common.ReactNative.processColor(deletedStuff?.gutterColour)
          };
        }
      }
    });
    r[1] = JSON.stringify(rows);
    return r[1];
  });
}const Message = metro.findByProps("startEditMessage");
function cleanEdits$1(msg) {
  const editInput = " 85549acb9dc8443d8f5a88dc23d6f155`\n\n";
  if (msg && typeof msg === "string" && msg.includes(editInput)) {
    let trimmed = msg;
    return `${trimmed.substring(trimmed.lastIndexOf(editInput) + editInput.length)}`;
  }
  return msg;
}
function patchInput() {
  patcher.before("startEditMessage", Message, function(args) {
    try {
      const [channelId, messageId, msg] = args;
      args[2] = cleanEdits$1(msg);
    } catch (error) {
    }
    return args;
  });
}function patchCopy() {
  patcher.before("setString", common.clipboard, function(args) {
    try {
      const [copied] = args;
      const strip = "06e56823dash6945dash4281dash8a2bdashecee215cba27";
      if (typeof copied !== "string")
        return args;
      args[0] = stripStringAfterLastKeyword(copied, strip);
    } catch (error) {
    }
    return args;
  });
}const { Image: Image$5 } = components.General;
const { FormRow: FormRow$2 } = components.Forms;
const ActionSheetRow = vendetta.metro.findByProps("ActionSheetRow")?.ActionSheetRow;
function ActionSheetRow$1(param) {
  let { label, icon, onPress, onLongPress } = param;
  const styles = common.stylesheet.createThemedStyleSheet({
    icon: {
      width: 18,
      height: 18,
      tintColor: ui.semanticColors.INTERACTIVE_NORMAL,
      opacity: 1
    }
  });
  return ActionSheetRow ? /* @__PURE__ */ React.createElement(ActionSheetRow, {
    label,
    icon: /* @__PURE__ */ React.createElement(ActionSheetRow.Icon, {
      source: icon,
      IconComponent: function() {
        return /* @__PURE__ */ React.createElement(Image$5, {
          resizeMode: "cover",
          style: styles.icon,
          source: icon
        });
      }
    }),
    onPress: function() {
      return onPress?.();
    },
    onLongPress: function() {
      return onLongPress?.();
    }
  }) : /* @__PURE__ */ React.createElement(FormRow$2, {
    label,
    leading: /* @__PURE__ */ React.createElement(FormRow$2.Icon, {
      source: icon,
      style: styles.icon
    }),
    onPress: function() {
      return onPress?.();
    },
    onLongPress: function() {
      return onLongPress?.();
    }
  });
}const edit = " `\uFF3B EDITED at %t 85549acb9dc8443d8f5a88dc23d6f155`\n\n";
const editInput = " 85549acb9dc8443d8f5a88dc23d6f155`\n\n";
metro.findByStoreName("MessageStore");
const ChannelStore = metro.findByProps("getChannel", "getDMFromUserId");
const ActionSheet = metro.findByProps("openLazy", "hideActionSheet");
function extractProperties(original) {
  try {
    original && original?.attachments && original?.stickerItems && original?.stickerItems[0] && original?.stickerItems[0].id && original?.attachments.push({
      id: `${original?.stickerItems[0]?.id}`,
      filename: `${original?.stickerItems[0]?.name}`,
      size: 14047,
      url: `https://discord.com/stickers/${original?.stickerItems[0].id}.png`,
      proxy_url: `https://discord.com/stickers/${original?.stickerItems[0].id}.png`,
      width: 446,
      height: 353,
      content_type: "image/gif",
      content_scan_version: 1,
      placeholder: "aQgKDoL4VHmehohnlXmJd4eJGGCXAnU=",
      placeholder_version: 1,
      spoiler: false
    });
    return {
      id: `${original?.id}`,
      channel_id: `${original?.channel_id}`,
      author: {
        id: `${original?.author?.id}`,
        avatar: `${original?.author?.avatar}`,
        username: original?.author?.username,
        discriminator: `${original?.author?.discriminator}`,
        globalName: original?.author?.globalName,
        bot: original?.author?.bot,
        verified: (JSON.parse(JSON.stringify(original)).author?.publicFlags & 1 << 16) !== 0
      },
      attachments: original?.attachments,
      timestamp: original?.timestamp
    };
  } catch (error) {
    logStuff("hmmmm_m" + error);
    return "failure";
  }
}
function cleanEdits(msg) {
  if (msg && typeof msg === "string" && msg.includes(editInput)) {
    let trimmed = msg;
    return `${trimmed.substring(trimmed.lastIndexOf(editInput) + editInput.length)}`;
  }
  return msg;
}
function patchSheet() {
  patcher.before("openLazy", ActionSheet, function(ctx) {
    const [component, args, actionMessage] = ctx;
    const message = actionMessage?.message;
    if (args !== "MessageLongPressActionSheet" || !message)
      return;
    component.then(function(instance) {
      const unpatch = patcher.after("default", instance, function(_, component2) {
        common.React.useEffect(function() {
          return function() {
            unpatch();
          };
        }, []);
        const buttons = utils.findInReactTree(component2, function(x) {
          return x?.[0]?.type?.name === "ButtonRow";
        });
        if (!buttons)
          return component2;
        if (message?.content?.includes(endofdeleted)) {
          buttons.unshift(/* @__PURE__ */ common.React.createElement(ActionSheetRow$1, {
            label: "Remove Deleted Message",
            icon: assets.getAssetIDByName("ic_message_delete"),
            onPress: async function() {
              common.FluxDispatcher.dispatch({
                type: "MESSAGE_DELETE",
                id: message.id,
                channelId: message.channel_id,
                dont_log: true
              });
              toasts.showToast("Removed Deleted Message", assets.getAssetIDByName("ic_keyboard_delete_24px"));
              ActionSheet.hideActionSheet();
            }
          }));
        }
        if (message?.content?.includes(editInput)) {
          buttons.unshift(/* @__PURE__ */ common.React.createElement(ActionSheetRow$1, {
            label: "Remove Edit Logs",
            icon: assets.getAssetIDByName("ClipboardListIcon"),
            onPress: async function() {
              let trimmed = message.content;
              common.FluxDispatcher.dispatch({
                type: "MESSAGE_UPDATE",
                message: {
                  ...message,
                  content: `${trimmed.substring(trimmed.lastIndexOf(editInput) + editInput.length)}`,
                  guild_id: ChannelStore.getChannel(message?.channel_id)?.guild_id,
                  embeds: null,
                  messageReference: null
                },
                dont_log: true
              });
              toasts.showToast("Removed Edit Logs", assets.getAssetIDByName("ic_undo"));
              ActionSheet.hideActionSheet();
            }
          }));
        }
        if (message?.content?.includes(endofdeleted) || message?.content?.includes(editInput) || message?.editedTimestamp && typeof message?.editedTimestamp === "string") {
          buttons.push(/* @__PURE__ */ common.React.createElement(ActionSheetRow$1, {
            label: "Push to Storage",
            icon: assets.getAssetIDByName("icon-qs-files"),
            onPress: async function() {
              if (message?.content?.includes(endofdeleted)) {
                const messageContent = `${message?.content || ""}`.split(endofdeleted);
                await modifyMessage("delete", {
                  ...extractProperties(message),
                  content: `${messageContent[1] || messageContent[0]}`,
                  guild_id: ChannelStore.getChannel(message?.channel_id).guild_id,
                  dateofaction: `${Math.floor(Date.now() / 1e3)}`,
                  embeds: message?.embeds,
                  edited: message?.editedTimestamp != null
                });
              } else {
                const updatedContent = cleanEdits(message?.content);
                await modifyMessage("edit", {
                  ...extractProperties(message),
                  content: (message?.editedTimestamp ? edit.replace(/%t/g, `<t:${Math.floor(Date.parse(message?.editedTimestamp) / 1e3)}:T>`) : " `\uFF3B EDITED 85549acb9dc8443d8f5a88dc23d6f155`\n\n") + updatedContent,
                  guild_id: ChannelStore.getChannel(message?.channel_id)?.guild_id,
                  attachments: message?.attachments,
                  edited: message.editedTimestamp != null,
                  dateofaction: `${Math.floor(Date.now() / 1e3)}`
                }, message?.content);
              }
              toasts.showToast("Pushed Message to Storage", assets.getAssetIDByName("icon-qs-files"));
              ActionSheet.hideActionSheet();
            }
          }));
        }
      });
    });
  });
}function addToList(focusedUserId, isIncluded, props) {
  if (focusedUserId) {
    try {
      if (!isIncluded) {
        plugin.storage.userList.push(focusedUserId);
        toasts.showToast("Added Entry", assets.getAssetIDByName("hub-add"));
      } else {
        plugin.storage.userList = plugin.storage.userList.filter(function(item) {
          return item !== focusedUserId;
        });
        toasts.showToast("Removed Entry", assets.getAssetIDByName("ic_close_16px"));
      }
      props.hideActionSheet();
    } catch (error) {
    }
  }
}
function patchUserSheet() {
  patcher.before("render", metro.findByProps("ScrollView").View, function(args) {
    try {
      const userProfileKey = ".$UserProfileOverflow";
      const a = utils.findInReactTree(args, function(r) {
        return r.key === userProfileKey;
      });
      if (!a || !a.props || a.props.sheetKey !== "UserProfileOverflow")
        return;
      const props = a.props.content.props;
      if (props.options.some(function(option) {
        return option?.label === "Add to Message Logger Entry List";
      }) || props.options.some(function(option) {
        return option?.label === "Remove from Message Logger Entry List";
      }))
        return;
      const currentUserId = metro.findByStoreName("UserStore").getCurrentUser()?.id;
      const focusedUserId = Object.keys(a._owner.stateNode._keyChildMapping).find(function(str) {
        return a._owner.stateNode._keyChildMapping[str] && str.match(/(?<=\$UserProfile)\d+/);
      })?.slice?.(".$UserProfile".length) || currentUserId;
      const isIncluded = [
        ...plugin.storage.userList,
        ...plugin.storage.channelList,
        ...plugin.storage.guildList
      ].includes(focusedUserId);
      props.options.unshift({
        label: `${!isIncluded ? "Add to Message Logger Entry List" : "Remove from Message Logger Entry List"}`,
        onPress: function() {
          return addToList(focusedUserId, isIncluded, props);
        }
      });
    } catch (error) {
    }
  });
}const { FormSection: FormSection$1 } = components.Forms;
const getScreens = metro.findByName("getScreens");
const settingsModule = metro.findByName("UserSettingsOverviewWrapper", false);
const styles$1 = common.stylesheet.createThemedStyleSheet({
  container: {
    flex: 1,
    backgroundColor: ui.semanticColors.BACKGROUND_MOBILE_PRIMARY
  }
});
function patchSettingsPin(shouldAppear, render, you) {
  const patches = [];
  const unpatch = patcher.after("default", settingsModule, function(_, ret) {
    unpatch();
    const Overview = utils.findInReactTree(ret.props.children, function(i) {
      return i.type && i.type.name === "UserSettingsOverview";
    });
    patches.push(patcher.after("render", Overview.type.prototype, function(_2, param) {
      let { props: { children } } = param;
      const titles = [
        common.i18n.Messages["BILLING_SETTINGS"],
        common.i18n.Messages["PREMIUM_SETTINGS"]
      ];
      children = utils.findInReactTree(children, function(t) {
        return t.children[1].type === FormSection$1;
      }).children;
      const index = children.findIndex(function(c) {
        return titles.includes(c?.props.label);
      });
      if (shouldAppear())
        children.splice(index === -1 ? 4 : index, 0, render({}));
    }));
  }, true);
  patches.push(unpatch);
  if (getScreens && you) {
    const screenKey = `VENDETTA_PLUGIN_${common.lodash.snakeCase(you.key).toUpperCase()}`;
    const Page = you.page.render;
    const component = common.React.memo(function(param) {
      let { navigation } = param;
      const unsub = navigation.addListener("focus", function() {
        unsub();
        navigation.setOptions(utils.without(you.page, "noErrorBoundary", "render"));
      });
      return /* @__PURE__ */ common.React.createElement(common.ReactNative.View, {
        style: styles$1.container
      }, you.page.noErrorBoundary ? /* @__PURE__ */ common.React.createElement(Page, null) : /* @__PURE__ */ common.React.createElement(components.ErrorBoundary, null, /* @__PURE__ */ common.React.createElement(Page, null)));
    });
    const rendererConfig = {
      [screenKey]: {
        type: "route",
        title: typeof you.title === "function" ? you.title : function() {
          return you.title;
        },
        icon: you.icon,
        screen: {
          route: `VendettaPlugin${common.lodash.chain(you.key).camelCase().upperFirst().value()}`,
          getComponent: function() {
            return component;
          }
        }
      }
    };
    const manipulateSections = function(ret, nw) {
      const cloned = [
        ...ret
      ];
      const sections = nw ? cloned?.[0]?.sections : cloned;
      if (!Array.isArray(sections))
        return cloned;
      const title = "Vendetta";
      const section = sections.find(function(x) {
        return x?.title === title;
      });
      if (section)
        section.settings.push(screenKey);
      return cloned;
    };
    const oldYouPatch = function() {
      const layout = metro.findByProps("useOverviewSettings");
      const titleConfig = metro.findByProps("getSettingTitleConfig");
      const stuff = metro.findByProps("SETTING_RELATIONSHIPS", "SETTING_RENDERER_CONFIGS");
      const OLD_getterFunction = "getSettingSearchListItems";
      const NEW_getterFunction = "getSettingListItems";
      const oldGettersModule = metro.findByProps(OLD_getterFunction);
      const usingNewGettersModule = !oldGettersModule;
      const getterFunctionName = usingNewGettersModule ? NEW_getterFunction : OLD_getterFunction;
      const getters = oldGettersModule ?? metro.findByProps(NEW_getterFunction);
      if (!getters || !layout)
        return false;
      patches.push(patcher.after("useOverviewSettings", layout, function(_, ret) {
        return manipulateSections(ret, false);
      }));
      patches.push(patcher.after("getSettingTitleConfig", titleConfig, function(_, ret) {
        return {
          ...ret,
          ...{
            [screenKey]: typeof you.title === "function" ? you.title() : you.title
          }
        };
      }));
      patches.push(patcher.after(getterFunctionName, getters, function(param, ret) {
        let [settings] = param;
        return [
          ...settings.includes(screenKey) ? [
            {
              type: "setting_search_result",
              ancestorRendererData: rendererConfig[screenKey],
              setting: screenKey,
              title: typeof you.title === "function" ? you.title() : you.title,
              breadcrumbs: [
                "Vendetta"
              ],
              icon: rendererConfig[screenKey].icon
            }
          ] : [],
          ...ret
        ];
      }));
      const oldRelationships = stuff.SETTING_RELATIONSHIPS;
      const oldRendererConfigs = stuff.SETTING_RENDERER_CONFIGS;
      stuff.SETTING_RELATIONSHIPS = {
        ...oldRelationships,
        ...{
          [screenKey]: null
        }
      };
      stuff.SETTING_RENDERER_CONFIGS = {
        ...oldRendererConfigs,
        ...rendererConfig
      };
      patches.push(function() {
        stuff.SETTING_RELATIONSHIPS = oldRelationships;
        stuff.SETTING_RENDERER_CONFIGS = oldRelationships;
      });
      return true;
    };
    const newYouPatch = function() {
      const settingsListComponents = metro.findByProps("SearchableSettingsList");
      const settingConstantsModule = metro.findByProps("SETTING_RENDERER_CONFIG");
      const gettersModule = metro.findByProps("getSettingListItems");
      if (!gettersModule || !settingsListComponents || !settingConstantsModule)
        return false;
      patches.push(patcher.before("type", settingsListComponents.SearchableSettingsList, function(ret) {
        return manipulateSections(ret, true);
      }));
      patches.push(patcher.after("getSettingListSearchResultItems", gettersModule, function(_, ret) {
        for (const s of ret)
          if (s.setting === screenKey)
            s.breadcrumbs = [
              "Vendetta"
            ];
      }));
      const oldRendererConfig = settingConstantsModule.SETTING_RENDERER_CONFIG;
      settingConstantsModule.SETTING_RENDERER_CONFIG = {
        ...oldRendererConfig,
        ...rendererConfig
      };
      patches.push(function() {
        settingConstantsModule.SETTING_RENDERER_CONFIG = oldRendererConfig;
      });
      return true;
    };
    if (!newYouPatch())
      oldYouPatch();
  }
  return function() {
    return patches.forEach(function(x) {
      return x();
    });
  };
}var lodash = {exports: {}};lodash.exports;
(function(module, exports) {
  /**
  * @license
  * Lodash <https://lodash.com/>
  * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
  * Released under MIT license <https://lodash.com/license>
  * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
  * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  */
  (function() {
    var n, t = "Expected a function", r = "__lodash_hash_undefined__", e = "__lodash_placeholder__", u = 16, i = 32, o = 64, f = 128, a = 256, c = 1 / 0, l = 9007199254740991, s = NaN, h = 4294967295, p = [
      [
        "ary",
        f
      ],
      [
        "bind",
        1
      ],
      [
        "bindKey",
        2
      ],
      [
        "curry",
        8
      ],
      [
        "curryRight",
        u
      ],
      [
        "flip",
        512
      ],
      [
        "partial",
        i
      ],
      [
        "partialRight",
        o
      ],
      [
        "rearg",
        a
      ]
    ], v = "[object Arguments]", _ = "[object Array]", g = "[object Boolean]", y = "[object Date]", d = "[object Error]", b = "[object Function]", w = "[object GeneratorFunction]", m = "[object Map]", x = "[object Number]", j = "[object Object]", A = "[object Promise]", k = "[object RegExp]", O = "[object Set]", I = "[object String]", R = "[object Symbol]", z = "[object WeakMap]", E = "[object ArrayBuffer]", S = "[object DataView]", W = "[object Float32Array]", L = "[object Float64Array]", C = "[object Int8Array]", U = "[object Int16Array]", B = "[object Int32Array]", T = "[object Uint8Array]", $ = "[object Uint8ClampedArray]", D = "[object Uint16Array]", M = "[object Uint32Array]", F = /\b__p \+= '';/g, N = /\b(__p \+=) '' \+/g, P = /(__e\(.*?\)|\b__t\)) \+\n'';/g, q = /&(?:amp|lt|gt|quot|#39);/g, Z = /[&<>"']/g, K = RegExp(q.source), V = RegExp(Z.source), G = /<%-([\s\S]+?)%>/g, H = /<%([\s\S]+?)%>/g, J = /<%=([\s\S]+?)%>/g, Y = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Q = /^\w*$/, X = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nn = /[\\^$.*+?()[\]{}|]/g, tn = RegExp(nn.source), rn = /^\s+/, en = /\s/, un = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, on = /\{\n\/\* \[wrapped with (.+)\] \*/, fn = /,? & /, an = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, cn = /[()=,{}\[\]\/\s]/, ln = /\\(\\)?/g, sn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, hn = /\w*$/, pn = /^[-+]0x[0-9a-f]+$/i, vn = /^0b[01]+$/i, _n = /^\[object .+?Constructor\]$/, gn = /^0o[0-7]+$/i, yn = /^(?:0|[1-9]\d*)$/, dn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, bn = /($^)/, wn = /['\n\r\u2028\u2029\\]/g, mn = "\uD800-\uDFFF", xn = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", jn = "\\u2700-\\u27bf", An = "a-z\\xdf-\\xf6\\xf8-\\xff", kn = "A-Z\\xc0-\\xd6\\xd8-\\xde", On = "\\ufe0e\\ufe0f", In = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Rn = "['\u2019]", zn = "[" + mn + "]", En = "[" + In + "]", Sn = "[" + xn + "]", Wn = "\\d+", Ln = "[" + jn + "]", Cn = "[" + An + "]", Un = "[^" + mn + In + Wn + jn + An + kn + "]", Bn = "\uD83C[\uDFFB-\uDFFF]", Tn = "[^" + mn + "]", $n = "(?:\uD83C[\uDDE6-\uDDFF]){2}", Dn = "[\uD800-\uDBFF][\uDC00-\uDFFF]", Mn = "[" + kn + "]", Fn = "\\u200d", Nn = "(?:" + Cn + "|" + Un + ")", Pn = "(?:" + Mn + "|" + Un + ")", qn = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?", Zn = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?", Kn = "(?:" + Sn + "|" + Bn + ")?", Vn = "[" + On + "]?", Gn = Vn + Kn + ("(?:" + Fn + "(?:" + [
      Tn,
      $n,
      Dn
    ].join("|") + ")" + Vn + Kn + ")*"), Hn = "(?:" + [
      Ln,
      $n,
      Dn
    ].join("|") + ")" + Gn, Jn = "(?:" + [
      Tn + Sn + "?",
      Sn,
      $n,
      Dn,
      zn
    ].join("|") + ")", Yn = RegExp(Rn, "g"), Qn = RegExp(Sn, "g"), Xn = RegExp(Bn + "(?=" + Bn + ")|" + Jn + Gn, "g"), nt = RegExp([
      Mn + "?" + Cn + "+" + qn + "(?=" + [
        En,
        Mn,
        "$"
      ].join("|") + ")",
      Pn + "+" + Zn + "(?=" + [
        En,
        Mn + Nn,
        "$"
      ].join("|") + ")",
      Mn + "?" + Nn + "+" + qn,
      Mn + "+" + Zn,
      "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      Wn,
      Hn
    ].join("|"), "g"), tt = RegExp("[" + Fn + mn + xn + On + "]"), rt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, et = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], ut = -1, it = {};
    it[W] = it[L] = it[C] = it[U] = it[B] = it[T] = it[$] = it[D] = it[M] = true, it[v] = it[_] = it[E] = it[g] = it[S] = it[y] = it[d] = it[b] = it[m] = it[x] = it[j] = it[k] = it[O] = it[I] = it[z] = false;
    var ot = {};
    ot[v] = ot[_] = ot[E] = ot[S] = ot[g] = ot[y] = ot[W] = ot[L] = ot[C] = ot[U] = ot[B] = ot[m] = ot[x] = ot[j] = ot[k] = ot[O] = ot[I] = ot[R] = ot[T] = ot[$] = ot[D] = ot[M] = true, ot[d] = ot[b] = ot[z] = false;
    var ft = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, at = parseFloat, ct = parseInt, lt = "object" == typeof commonjsGlobal && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal, st = "object" == typeof self && self && self.Object === Object && self, ht = lt || st || Function("return this")(), pt = exports && !exports.nodeType && exports, vt = pt && true && module && !module.nodeType && module, _t = vt && vt.exports === pt, gt = _t && lt.process, yt = function() {
      try {
        var n2 = vt && vt.require && vt.require("util").types;
        return n2 || gt && gt.binding && gt.binding("util");
      } catch (n3) {
      }
    }(), dt = yt && yt.isArrayBuffer, bt = yt && yt.isDate, wt = yt && yt.isMap, mt = yt && yt.isRegExp, xt = yt && yt.isSet, jt = yt && yt.isTypedArray;
    function At(n2, t2, r2) {
      switch (r2.length) {
        case 0:
          return n2.call(t2);
        case 1:
          return n2.call(t2, r2[0]);
        case 2:
          return n2.call(t2, r2[0], r2[1]);
        case 3:
          return n2.call(t2, r2[0], r2[1], r2[2]);
      }
      return n2.apply(t2, r2);
    }
    function kt(n2, t2, r2, e2) {
      for (var u2 = -1, i2 = null == n2 ? 0 : n2.length; ++u2 < i2; ) {
        var o2 = n2[u2];
        t2(e2, o2, r2(o2), n2);
      }
      return e2;
    }
    function Ot(n2, t2) {
      for (var r2 = -1, e2 = null == n2 ? 0 : n2.length; ++r2 < e2 && false !== t2(n2[r2], r2, n2); )
        ;
      return n2;
    }
    function It(n2, t2) {
      for (var r2 = null == n2 ? 0 : n2.length; r2-- && false !== t2(n2[r2], r2, n2); )
        ;
      return n2;
    }
    function Rt(n2, t2) {
      for (var r2 = -1, e2 = null == n2 ? 0 : n2.length; ++r2 < e2; )
        if (!t2(n2[r2], r2, n2))
          return false;
      return true;
    }
    function zt(n2, t2) {
      for (var r2 = -1, e2 = null == n2 ? 0 : n2.length, u2 = 0, i2 = []; ++r2 < e2; ) {
        var o2 = n2[r2];
        t2(o2, r2, n2) && (i2[u2++] = o2);
      }
      return i2;
    }
    function Et(n2, t2) {
      return !!(null == n2 ? 0 : n2.length) && Mt(n2, t2, 0) > -1;
    }
    function St(n2, t2, r2) {
      for (var e2 = -1, u2 = null == n2 ? 0 : n2.length; ++e2 < u2; )
        if (r2(t2, n2[e2]))
          return true;
      return false;
    }
    function Wt(n2, t2) {
      for (var r2 = -1, e2 = null == n2 ? 0 : n2.length, u2 = Array(e2); ++r2 < e2; )
        u2[r2] = t2(n2[r2], r2, n2);
      return u2;
    }
    function Lt(n2, t2) {
      for (var r2 = -1, e2 = t2.length, u2 = n2.length; ++r2 < e2; )
        n2[u2 + r2] = t2[r2];
      return n2;
    }
    function Ct(n2, t2, r2, e2) {
      var u2 = -1, i2 = null == n2 ? 0 : n2.length;
      for (e2 && i2 && (r2 = n2[++u2]); ++u2 < i2; )
        r2 = t2(r2, n2[u2], u2, n2);
      return r2;
    }
    function Ut(n2, t2, r2, e2) {
      var u2 = null == n2 ? 0 : n2.length;
      for (e2 && u2 && (r2 = n2[--u2]); u2--; )
        r2 = t2(r2, n2[u2], u2, n2);
      return r2;
    }
    function Bt(n2, t2) {
      for (var r2 = -1, e2 = null == n2 ? 0 : n2.length; ++r2 < e2; )
        if (t2(n2[r2], r2, n2))
          return true;
      return false;
    }
    var Tt = qt("length");
    function $t(n2, t2, r2) {
      var e2;
      return r2(n2, function(n3, r3, u2) {
        if (t2(n3, r3, u2))
          return e2 = r3, false;
      }), e2;
    }
    function Dt(n2, t2, r2, e2) {
      for (var u2 = n2.length, i2 = r2 + (e2 ? 1 : -1); e2 ? i2-- : ++i2 < u2; )
        if (t2(n2[i2], i2, n2))
          return i2;
      return -1;
    }
    function Mt(n2, t2, r2) {
      return t2 == t2 ? function(n3, t3, r3) {
        var e2 = r3 - 1, u2 = n3.length;
        for (; ++e2 < u2; )
          if (n3[e2] === t3)
            return e2;
        return -1;
      }(n2, t2, r2) : Dt(n2, Nt, r2);
    }
    function Ft(n2, t2, r2, e2) {
      for (var u2 = r2 - 1, i2 = n2.length; ++u2 < i2; )
        if (e2(n2[u2], t2))
          return u2;
      return -1;
    }
    function Nt(n2) {
      return n2 != n2;
    }
    function Pt(n2, t2) {
      var r2 = null == n2 ? 0 : n2.length;
      return r2 ? Vt(n2, t2) / r2 : s;
    }
    function qt(t2) {
      return function(r2) {
        return null == r2 ? n : r2[t2];
      };
    }
    function Zt(t2) {
      return function(r2) {
        return null == t2 ? n : t2[r2];
      };
    }
    function Kt(n2, t2, r2, e2, u2) {
      return u2(n2, function(n3, u3, i2) {
        r2 = e2 ? (e2 = false, n3) : t2(r2, n3, u3, i2);
      }), r2;
    }
    function Vt(t2, r2) {
      for (var e2, u2 = -1, i2 = t2.length; ++u2 < i2; ) {
        var o2 = r2(t2[u2]);
        o2 !== n && (e2 = e2 === n ? o2 : e2 + o2);
      }
      return e2;
    }
    function Gt(n2, t2) {
      for (var r2 = -1, e2 = Array(n2); ++r2 < n2; )
        e2[r2] = t2(r2);
      return e2;
    }
    function Ht(n2) {
      return n2 ? n2.slice(0, hr(n2) + 1).replace(rn, "") : n2;
    }
    function Jt(n2) {
      return function(t2) {
        return n2(t2);
      };
    }
    function Yt(n2, t2) {
      return Wt(t2, function(t3) {
        return n2[t3];
      });
    }
    function Qt(n2, t2) {
      return n2.has(t2);
    }
    function Xt(n2, t2) {
      for (var r2 = -1, e2 = n2.length; ++r2 < e2 && Mt(t2, n2[r2], 0) > -1; )
        ;
      return r2;
    }
    function nr(n2, t2) {
      for (var r2 = n2.length; r2-- && Mt(t2, n2[r2], 0) > -1; )
        ;
      return r2;
    }
    var tr = Zt({
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    }), rr = Zt({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    });
    function er(n2) {
      return "\\" + ft[n2];
    }
    function ur(n2) {
      return tt.test(n2);
    }
    function ir(n2) {
      var t2 = -1, r2 = Array(n2.size);
      return n2.forEach(function(n3, e2) {
        r2[++t2] = [
          e2,
          n3
        ];
      }), r2;
    }
    function or(n2, t2) {
      return function(r2) {
        return n2(t2(r2));
      };
    }
    function fr(n2, t2) {
      for (var r2 = -1, u2 = n2.length, i2 = 0, o2 = []; ++r2 < u2; ) {
        var f2 = n2[r2];
        f2 !== t2 && f2 !== e || (n2[r2] = e, o2[i2++] = r2);
      }
      return o2;
    }
    function ar(n2) {
      var t2 = -1, r2 = Array(n2.size);
      return n2.forEach(function(n3) {
        r2[++t2] = n3;
      }), r2;
    }
    function cr(n2) {
      var t2 = -1, r2 = Array(n2.size);
      return n2.forEach(function(n3) {
        r2[++t2] = [
          n3,
          n3
        ];
      }), r2;
    }
    function lr(n2) {
      return ur(n2) ? function(n3) {
        var t2 = Xn.lastIndex = 0;
        for (; Xn.test(n3); )
          ++t2;
        return t2;
      }(n2) : Tt(n2);
    }
    function sr(n2) {
      return ur(n2) ? function(n3) {
        return n3.match(Xn) || [];
      }(n2) : function(n3) {
        return n3.split("");
      }(n2);
    }
    function hr(n2) {
      for (var t2 = n2.length; t2-- && en.test(n2.charAt(t2)); )
        ;
      return t2;
    }
    var pr = Zt({
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    });
    var vr = function en2(mn2) {
      var xn2, jn2 = (mn2 = null == mn2 ? ht : vr.defaults(ht.Object(), mn2, vr.pick(ht, et))).Array, An2 = mn2.Date, kn2 = mn2.Error, On2 = mn2.Function, In2 = mn2.Math, Rn2 = mn2.Object, zn2 = mn2.RegExp, En2 = mn2.String, Sn2 = mn2.TypeError, Wn2 = jn2.prototype, Ln2 = On2.prototype, Cn2 = Rn2.prototype, Un2 = mn2["__core-js_shared__"], Bn2 = Ln2.toString, Tn2 = Cn2.hasOwnProperty, $n2 = 0, Dn2 = (xn2 = /[^.]+$/.exec(Un2 && Un2.keys && Un2.keys.IE_PROTO || "")) ? "Symbol(src)_1." + xn2 : "", Mn2 = Cn2.toString, Fn2 = Bn2.call(Rn2), Nn2 = ht._, Pn2 = zn2("^" + Bn2.call(Tn2).replace(nn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), qn2 = _t ? mn2.Buffer : n, Zn2 = mn2.Symbol, Kn2 = mn2.Uint8Array, Vn2 = qn2 ? qn2.allocUnsafe : n, Gn2 = or(Rn2.getPrototypeOf, Rn2), Hn2 = Rn2.create, Jn2 = Cn2.propertyIsEnumerable, Xn2 = Wn2.splice, tt2 = Zn2 ? Zn2.isConcatSpreadable : n, ft2 = Zn2 ? Zn2.iterator : n, lt2 = Zn2 ? Zn2.toStringTag : n, st2 = function() {
        try {
          var n2 = hi(Rn2, "defineProperty");
          return n2({}, "", {}), n2;
        } catch (n3) {
        }
      }(), pt2 = mn2.clearTimeout !== ht.clearTimeout && mn2.clearTimeout, vt2 = An2 && An2.now !== ht.Date.now && An2.now, gt2 = mn2.setTimeout !== ht.setTimeout && mn2.setTimeout, yt2 = In2.ceil, Tt2 = In2.floor, Zt2 = Rn2.getOwnPropertySymbols, _r = qn2 ? qn2.isBuffer : n, gr = mn2.isFinite, yr = Wn2.join, dr = or(Rn2.keys, Rn2), br = In2.max, wr = In2.min, mr = An2.now, xr = mn2.parseInt, jr = In2.random, Ar = Wn2.reverse, kr = hi(mn2, "DataView"), Or = hi(mn2, "Map"), Ir = hi(mn2, "Promise"), Rr = hi(mn2, "Set"), zr = hi(mn2, "WeakMap"), Er = hi(Rn2, "create"), Sr = zr && new zr(), Wr = {}, Lr = $i(kr), Cr = $i(Or), Ur = $i(Ir), Br = $i(Rr), Tr = $i(zr), $r = Zn2 ? Zn2.prototype : n, Dr = $r ? $r.valueOf : n, Mr = $r ? $r.toString : n;
      function Fr(n2) {
        if (rf(n2) && !Zo(n2) && !(n2 instanceof Zr)) {
          if (n2 instanceof qr)
            return n2;
          if (Tn2.call(n2, "__wrapped__"))
            return Di(n2);
        }
        return new qr(n2);
      }
      var Nr = function() {
        function t2() {
        }
        return function(r2) {
          if (!tf(r2))
            return {};
          if (Hn2)
            return Hn2(r2);
          t2.prototype = r2;
          var e2 = new t2();
          return t2.prototype = n, e2;
        };
      }();
      function Pr() {
      }
      function qr(t2, r2) {
        this.__wrapped__ = t2, this.__actions__ = [], this.__chain__ = !!r2, this.__index__ = 0, this.__values__ = n;
      }
      function Zr(n2) {
        this.__wrapped__ = n2, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = h, this.__views__ = [];
      }
      function Kr(n2) {
        var t2 = -1, r2 = null == n2 ? 0 : n2.length;
        for (this.clear(); ++t2 < r2; ) {
          var e2 = n2[t2];
          this.set(e2[0], e2[1]);
        }
      }
      function Vr(n2) {
        var t2 = -1, r2 = null == n2 ? 0 : n2.length;
        for (this.clear(); ++t2 < r2; ) {
          var e2 = n2[t2];
          this.set(e2[0], e2[1]);
        }
      }
      function Gr(n2) {
        var t2 = -1, r2 = null == n2 ? 0 : n2.length;
        for (this.clear(); ++t2 < r2; ) {
          var e2 = n2[t2];
          this.set(e2[0], e2[1]);
        }
      }
      function Hr(n2) {
        var t2 = -1, r2 = null == n2 ? 0 : n2.length;
        for (this.__data__ = new Gr(); ++t2 < r2; )
          this.add(n2[t2]);
      }
      function Jr(n2) {
        var t2 = this.__data__ = new Vr(n2);
        this.size = t2.size;
      }
      function Yr(n2, t2) {
        var r2 = Zo(n2), e2 = !r2 && qo(n2), u2 = !r2 && !e2 && Ho(n2), i2 = !r2 && !e2 && !u2 && sf(n2), o2 = r2 || e2 || u2 || i2, f2 = o2 ? Gt(n2.length, En2) : [], a2 = f2.length;
        for (var c2 in n2)
          !t2 && !Tn2.call(n2, c2) || o2 && ("length" == c2 || u2 && ("offset" == c2 || "parent" == c2) || i2 && ("buffer" == c2 || "byteLength" == c2 || "byteOffset" == c2) || bi(c2, a2)) || f2.push(c2);
        return f2;
      }
      function Qr(t2) {
        var r2 = t2.length;
        return r2 ? t2[He(0, r2 - 1)] : n;
      }
      function Xr(n2, t2) {
        return Ui(Eu(n2), ae(t2, 0, n2.length));
      }
      function ne(n2) {
        return Ui(Eu(n2));
      }
      function te(t2, r2, e2) {
        (e2 !== n && !Fo(t2[r2], e2) || e2 === n && !(r2 in t2)) && oe(t2, r2, e2);
      }
      function re(t2, r2, e2) {
        var u2 = t2[r2];
        Tn2.call(t2, r2) && Fo(u2, e2) && (e2 !== n || r2 in t2) || oe(t2, r2, e2);
      }
      function ee(n2, t2) {
        for (var r2 = n2.length; r2--; )
          if (Fo(n2[r2][0], t2))
            return r2;
        return -1;
      }
      function ue(n2, t2, r2, e2) {
        return pe(n2, function(n3, u2, i2) {
          t2(e2, n3, r2(n3), i2);
        }), e2;
      }
      function ie(n2, t2) {
        return n2 && Su(t2, Lf(t2), n2);
      }
      function oe(n2, t2, r2) {
        "__proto__" == t2 && st2 ? st2(n2, t2, {
          configurable: true,
          enumerable: true,
          value: r2,
          writable: true
        }) : n2[t2] = r2;
      }
      function fe(t2, r2) {
        for (var e2 = -1, u2 = r2.length, i2 = jn2(u2), o2 = null == t2; ++e2 < u2; )
          i2[e2] = o2 ? n : Rf(t2, r2[e2]);
        return i2;
      }
      function ae(t2, r2, e2) {
        return t2 == t2 && (e2 !== n && (t2 = t2 <= e2 ? t2 : e2), r2 !== n && (t2 = t2 >= r2 ? t2 : r2)), t2;
      }
      function ce(t2, r2, e2, u2, i2, o2) {
        var f2, a2 = 1 & r2, c2 = 2 & r2, l2 = 4 & r2;
        if (e2 && (f2 = i2 ? e2(t2, u2, i2, o2) : e2(t2)), f2 !== n)
          return f2;
        if (!tf(t2))
          return t2;
        var s2 = Zo(t2);
        if (s2) {
          if (f2 = function(n2) {
            var t3 = n2.length, r3 = new n2.constructor(t3);
            t3 && "string" == typeof n2[0] && Tn2.call(n2, "index") && (r3.index = n2.index, r3.input = n2.input);
            return r3;
          }(t2), !a2)
            return Eu(t2, f2);
        } else {
          var h2 = _i(t2), p2 = h2 == b || h2 == w;
          if (Ho(t2))
            return Au(t2, a2);
          if (h2 == j || h2 == v || p2 && !i2) {
            if (f2 = c2 || p2 ? {} : yi(t2), !a2)
              return c2 ? function(n2, t3) {
                return Su(n2, vi(n2), t3);
              }(t2, function(n2, t3) {
                return n2 && Su(t3, Cf(t3), n2);
              }(f2, t2)) : function(n2, t3) {
                return Su(n2, pi(n2), t3);
              }(t2, ie(f2, t2));
          } else {
            if (!ot[h2])
              return i2 ? t2 : {};
            f2 = function(n2, t3, r3) {
              var e3 = n2.constructor;
              switch (t3) {
                case E:
                  return ku(n2);
                case g:
                case y:
                  return new e3(+n2);
                case S:
                  return function(n3, t4) {
                    var r4 = t4 ? ku(n3.buffer) : n3.buffer;
                    return new n3.constructor(r4, n3.byteOffset, n3.byteLength);
                  }(n2, r3);
                case W:
                case L:
                case C:
                case U:
                case B:
                case T:
                case $:
                case D:
                case M:
                  return Ou(n2, r3);
                case m:
                  return new e3();
                case x:
                case I:
                  return new e3(n2);
                case k:
                  return function(n3) {
                    var t4 = new n3.constructor(n3.source, hn.exec(n3));
                    return t4.lastIndex = n3.lastIndex, t4;
                  }(n2);
                case O:
                  return new e3();
                case R:
                  return u3 = n2, Dr ? Rn2(Dr.call(u3)) : {};
              }
              var u3;
            }(t2, h2, a2);
          }
        }
        o2 || (o2 = new Jr());
        var _2 = o2.get(t2);
        if (_2)
          return _2;
        o2.set(t2, f2), af(t2) ? t2.forEach(function(n2) {
          f2.add(ce(n2, r2, e2, n2, t2, o2));
        }) : ef(t2) && t2.forEach(function(n2, u3) {
          f2.set(u3, ce(n2, r2, e2, u3, t2, o2));
        });
        var d2 = s2 ? n : (l2 ? c2 ? ii : ui : c2 ? Cf : Lf)(t2);
        return Ot(d2 || t2, function(n2, u3) {
          d2 && (n2 = t2[u3 = n2]), re(f2, u3, ce(n2, r2, e2, u3, t2, o2));
        }), f2;
      }
      function le(t2, r2, e2) {
        var u2 = e2.length;
        if (null == t2)
          return !u2;
        for (t2 = Rn2(t2); u2--; ) {
          var i2 = e2[u2], o2 = r2[i2], f2 = t2[i2];
          if (f2 === n && !(i2 in t2) || !o2(f2))
            return false;
        }
        return true;
      }
      function se(r2, e2, u2) {
        if ("function" != typeof r2)
          throw new Sn2(t);
        return Si(function() {
          r2.apply(n, u2);
        }, e2);
      }
      function he(n2, t2, r2, e2) {
        var u2 = -1, i2 = Et, o2 = true, f2 = n2.length, a2 = [], c2 = t2.length;
        if (!f2)
          return a2;
        r2 && (t2 = Wt(t2, Jt(r2))), e2 ? (i2 = St, o2 = false) : t2.length >= 200 && (i2 = Qt, o2 = false, t2 = new Hr(t2));
        n:
          for (; ++u2 < f2; ) {
            var l2 = n2[u2], s2 = null == r2 ? l2 : r2(l2);
            if (l2 = e2 || 0 !== l2 ? l2 : 0, o2 && s2 == s2) {
              for (var h2 = c2; h2--; )
                if (t2[h2] === s2)
                  continue n;
              a2.push(l2);
            } else
              i2(t2, s2, e2) || a2.push(l2);
          }
        return a2;
      }
      Fr.templateSettings = {
        escape: G,
        evaluate: H,
        interpolate: J,
        variable: "",
        imports: {
          _: Fr
        }
      }, Fr.prototype = Pr.prototype, Fr.prototype.constructor = Fr, qr.prototype = Nr(Pr.prototype), qr.prototype.constructor = qr, Zr.prototype = Nr(Pr.prototype), Zr.prototype.constructor = Zr, Kr.prototype.clear = function() {
        this.__data__ = Er ? Er(null) : {}, this.size = 0;
      }, Kr.prototype.delete = function(n2) {
        var t2 = this.has(n2) && delete this.__data__[n2];
        return this.size -= t2 ? 1 : 0, t2;
      }, Kr.prototype.get = function(t2) {
        var e2 = this.__data__;
        if (Er) {
          var u2 = e2[t2];
          return u2 === r ? n : u2;
        }
        return Tn2.call(e2, t2) ? e2[t2] : n;
      }, Kr.prototype.has = function(t2) {
        var r2 = this.__data__;
        return Er ? r2[t2] !== n : Tn2.call(r2, t2);
      }, Kr.prototype.set = function(t2, e2) {
        var u2 = this.__data__;
        return this.size += this.has(t2) ? 0 : 1, u2[t2] = Er && e2 === n ? r : e2, this;
      }, Vr.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, Vr.prototype.delete = function(n2) {
        var t2 = this.__data__, r2 = ee(t2, n2);
        return !(r2 < 0) && (r2 == t2.length - 1 ? t2.pop() : Xn2.call(t2, r2, 1), --this.size, true);
      }, Vr.prototype.get = function(t2) {
        var r2 = this.__data__, e2 = ee(r2, t2);
        return e2 < 0 ? n : r2[e2][1];
      }, Vr.prototype.has = function(n2) {
        return ee(this.__data__, n2) > -1;
      }, Vr.prototype.set = function(n2, t2) {
        var r2 = this.__data__, e2 = ee(r2, n2);
        return e2 < 0 ? (++this.size, r2.push([
          n2,
          t2
        ])) : r2[e2][1] = t2, this;
      }, Gr.prototype.clear = function() {
        this.size = 0, this.__data__ = {
          hash: new Kr(),
          map: new (Or || Vr)(),
          string: new Kr()
        };
      }, Gr.prototype.delete = function(n2) {
        var t2 = li(this, n2).delete(n2);
        return this.size -= t2 ? 1 : 0, t2;
      }, Gr.prototype.get = function(n2) {
        return li(this, n2).get(n2);
      }, Gr.prototype.has = function(n2) {
        return li(this, n2).has(n2);
      }, Gr.prototype.set = function(n2, t2) {
        var r2 = li(this, n2), e2 = r2.size;
        return r2.set(n2, t2), this.size += r2.size == e2 ? 0 : 1, this;
      }, Hr.prototype.add = Hr.prototype.push = function(n2) {
        return this.__data__.set(n2, r), this;
      }, Hr.prototype.has = function(n2) {
        return this.__data__.has(n2);
      }, Jr.prototype.clear = function() {
        this.__data__ = new Vr(), this.size = 0;
      }, Jr.prototype.delete = function(n2) {
        var t2 = this.__data__, r2 = t2.delete(n2);
        return this.size = t2.size, r2;
      }, Jr.prototype.get = function(n2) {
        return this.__data__.get(n2);
      }, Jr.prototype.has = function(n2) {
        return this.__data__.has(n2);
      }, Jr.prototype.set = function(n2, t2) {
        var r2 = this.__data__;
        if (r2 instanceof Vr) {
          var e2 = r2.__data__;
          if (!Or || e2.length < 199)
            return e2.push([
              n2,
              t2
            ]), this.size = ++r2.size, this;
          r2 = this.__data__ = new Gr(e2);
        }
        return r2.set(n2, t2), this.size = r2.size, this;
      };
      var pe = Cu(me), ve = Cu(xe, true);
      function _e(n2, t2) {
        var r2 = true;
        return pe(n2, function(n3, e2, u2) {
          return r2 = !!t2(n3, e2, u2);
        }), r2;
      }
      function ge(t2, r2, e2) {
        for (var u2 = -1, i2 = t2.length; ++u2 < i2; ) {
          var o2 = t2[u2], f2 = r2(o2);
          if (null != f2 && (a2 === n ? f2 == f2 && !lf(f2) : e2(f2, a2)))
            var a2 = f2, c2 = o2;
        }
        return c2;
      }
      function ye(n2, t2) {
        var r2 = [];
        return pe(n2, function(n3, e2, u2) {
          t2(n3, e2, u2) && r2.push(n3);
        }), r2;
      }
      function de(n2, t2, r2, e2, u2) {
        var i2 = -1, o2 = n2.length;
        for (r2 || (r2 = di), u2 || (u2 = []); ++i2 < o2; ) {
          var f2 = n2[i2];
          t2 > 0 && r2(f2) ? t2 > 1 ? de(f2, t2 - 1, r2, e2, u2) : Lt(u2, f2) : e2 || (u2[u2.length] = f2);
        }
        return u2;
      }
      var be = Uu(), we = Uu(true);
      function me(n2, t2) {
        return n2 && be(n2, t2, Lf);
      }
      function xe(n2, t2) {
        return n2 && we(n2, t2, Lf);
      }
      function je(n2, t2) {
        return zt(t2, function(t3) {
          return Qo(n2[t3]);
        });
      }
      function Ae(t2, r2) {
        for (var e2 = 0, u2 = (r2 = wu(r2, t2)).length; null != t2 && e2 < u2; )
          t2 = t2[Ti(r2[e2++])];
        return e2 && e2 == u2 ? t2 : n;
      }
      function ke(n2, t2, r2) {
        var e2 = t2(n2);
        return Zo(n2) ? e2 : Lt(e2, r2(n2));
      }
      function Oe(t2) {
        return null == t2 ? t2 === n ? "[object Undefined]" : "[object Null]" : lt2 && lt2 in Rn2(t2) ? function(t3) {
          var r2 = Tn2.call(t3, lt2), e2 = t3[lt2];
          try {
            t3[lt2] = n;
            var u2 = true;
          } catch (n2) {
          }
          var i2 = Mn2.call(t3);
          u2 && (r2 ? t3[lt2] = e2 : delete t3[lt2]);
          return i2;
        }(t2) : function(n2) {
          return Mn2.call(n2);
        }(t2);
      }
      function Ie(n2, t2) {
        return n2 > t2;
      }
      function Re(n2, t2) {
        return null != n2 && Tn2.call(n2, t2);
      }
      function ze(n2, t2) {
        return null != n2 && t2 in Rn2(n2);
      }
      function Ee(t2, r2, e2) {
        for (var u2 = e2 ? St : Et, i2 = t2[0].length, o2 = t2.length, f2 = o2, a2 = jn2(o2), c2 = 1 / 0, l2 = []; f2--; ) {
          var s2 = t2[f2];
          f2 && r2 && (s2 = Wt(s2, Jt(r2))), c2 = wr(s2.length, c2), a2[f2] = !e2 && (r2 || i2 >= 120 && s2.length >= 120) ? new Hr(f2 && s2) : n;
        }
        s2 = t2[0];
        var h2 = -1, p2 = a2[0];
        n:
          for (; ++h2 < i2 && l2.length < c2; ) {
            var v2 = s2[h2], _2 = r2 ? r2(v2) : v2;
            if (v2 = e2 || 0 !== v2 ? v2 : 0, !(p2 ? Qt(p2, _2) : u2(l2, _2, e2))) {
              for (f2 = o2; --f2; ) {
                var g2 = a2[f2];
                if (!(g2 ? Qt(g2, _2) : u2(t2[f2], _2, e2)))
                  continue n;
              }
              p2 && p2.push(_2), l2.push(v2);
            }
          }
        return l2;
      }
      function Se(t2, r2, e2) {
        var u2 = null == (t2 = Ri(t2, r2 = wu(r2, t2))) ? t2 : t2[Ti(Ji(r2))];
        return null == u2 ? n : At(u2, t2, e2);
      }
      function We(n2) {
        return rf(n2) && Oe(n2) == v;
      }
      function Le(t2, r2, e2, u2, i2) {
        return t2 === r2 || (null == t2 || null == r2 || !rf(t2) && !rf(r2) ? t2 != t2 && r2 != r2 : function(t3, r3, e3, u3, i3, o2) {
          var f2 = Zo(t3), a2 = Zo(r3), c2 = f2 ? _ : _i(t3), l2 = a2 ? _ : _i(r3), s2 = (c2 = c2 == v ? j : c2) == j, h2 = (l2 = l2 == v ? j : l2) == j, p2 = c2 == l2;
          if (p2 && Ho(t3)) {
            if (!Ho(r3))
              return false;
            f2 = true, s2 = false;
          }
          if (p2 && !s2)
            return o2 || (o2 = new Jr()), f2 || sf(t3) ? ri(t3, r3, e3, u3, i3, o2) : function(n2, t4, r4, e4, u4, i4, o3) {
              switch (r4) {
                case S:
                  if (n2.byteLength != t4.byteLength || n2.byteOffset != t4.byteOffset)
                    return false;
                  n2 = n2.buffer, t4 = t4.buffer;
                case E:
                  return !(n2.byteLength != t4.byteLength || !i4(new Kn2(n2), new Kn2(t4)));
                case g:
                case y:
                case x:
                  return Fo(+n2, +t4);
                case d:
                  return n2.name == t4.name && n2.message == t4.message;
                case k:
                case I:
                  return n2 == t4 + "";
                case m:
                  var f3 = ir;
                case O:
                  var a3 = 1 & e4;
                  if (f3 || (f3 = ar), n2.size != t4.size && !a3)
                    return false;
                  var c3 = o3.get(n2);
                  if (c3)
                    return c3 == t4;
                  e4 |= 2, o3.set(n2, t4);
                  var l3 = ri(f3(n2), f3(t4), e4, u4, i4, o3);
                  return o3.delete(n2), l3;
                case R:
                  if (Dr)
                    return Dr.call(n2) == Dr.call(t4);
              }
              return false;
            }(t3, r3, c2, e3, u3, i3, o2);
          if (!(1 & e3)) {
            var b2 = s2 && Tn2.call(t3, "__wrapped__"), w2 = h2 && Tn2.call(r3, "__wrapped__");
            if (b2 || w2) {
              var A2 = b2 ? t3.value() : t3, z2 = w2 ? r3.value() : r3;
              return o2 || (o2 = new Jr()), i3(A2, z2, e3, u3, o2);
            }
          }
          if (!p2)
            return false;
          return o2 || (o2 = new Jr()), function(t4, r4, e4, u4, i4, o3) {
            var f3 = 1 & e4, a3 = ui(t4), c3 = a3.length, l3 = ui(r4), s3 = l3.length;
            if (c3 != s3 && !f3)
              return false;
            var h3 = c3;
            for (; h3--; ) {
              var p3 = a3[h3];
              if (!(f3 ? p3 in r4 : Tn2.call(r4, p3)))
                return false;
            }
            var v2 = o3.get(t4), _2 = o3.get(r4);
            if (v2 && _2)
              return v2 == r4 && _2 == t4;
            var g2 = true;
            o3.set(t4, r4), o3.set(r4, t4);
            var y2 = f3;
            for (; ++h3 < c3; ) {
              var d2 = t4[p3 = a3[h3]], b3 = r4[p3];
              if (u4)
                var w3 = f3 ? u4(b3, d2, p3, r4, t4, o3) : u4(d2, b3, p3, t4, r4, o3);
              if (!(w3 === n ? d2 === b3 || i4(d2, b3, e4, u4, o3) : w3)) {
                g2 = false;
                break;
              }
              y2 || (y2 = "constructor" == p3);
            }
            if (g2 && !y2) {
              var m2 = t4.constructor, x2 = r4.constructor;
              m2 == x2 || !("constructor" in t4) || !("constructor" in r4) || "function" == typeof m2 && m2 instanceof m2 && "function" == typeof x2 && x2 instanceof x2 || (g2 = false);
            }
            return o3.delete(t4), o3.delete(r4), g2;
          }(t3, r3, e3, u3, i3, o2);
        }(t2, r2, e2, u2, Le, i2));
      }
      function Ce(t2, r2, e2, u2) {
        var i2 = e2.length, o2 = i2, f2 = !u2;
        if (null == t2)
          return !o2;
        for (t2 = Rn2(t2); i2--; ) {
          var a2 = e2[i2];
          if (f2 && a2[2] ? a2[1] !== t2[a2[0]] : !(a2[0] in t2))
            return false;
        }
        for (; ++i2 < o2; ) {
          var c2 = (a2 = e2[i2])[0], l2 = t2[c2], s2 = a2[1];
          if (f2 && a2[2]) {
            if (l2 === n && !(c2 in t2))
              return false;
          } else {
            var h2 = new Jr();
            if (u2)
              var p2 = u2(l2, s2, c2, t2, r2, h2);
            if (!(p2 === n ? Le(s2, l2, 3, u2, h2) : p2))
              return false;
          }
        }
        return true;
      }
      function Ue(n2) {
        return !(!tf(n2) || (t2 = n2, Dn2 && Dn2 in t2)) && (Qo(n2) ? Pn2 : _n).test($i(n2));
        var t2;
      }
      function Be(n2) {
        return "function" == typeof n2 ? n2 : null == n2 ? ia : "object" == typeof n2 ? Zo(n2) ? Ne(n2[0], n2[1]) : Fe(n2) : va(n2);
      }
      function Te(n2) {
        if (!Ai(n2))
          return dr(n2);
        var t2 = [];
        for (var r2 in Rn2(n2))
          Tn2.call(n2, r2) && "constructor" != r2 && t2.push(r2);
        return t2;
      }
      function $e(n2) {
        if (!tf(n2))
          return function(n3) {
            var t3 = [];
            if (null != n3)
              for (var r3 in Rn2(n3))
                t3.push(r3);
            return t3;
          }(n2);
        var t2 = Ai(n2), r2 = [];
        for (var e2 in n2)
          ("constructor" != e2 || !t2 && Tn2.call(n2, e2)) && r2.push(e2);
        return r2;
      }
      function De(n2, t2) {
        return n2 < t2;
      }
      function Me(n2, t2) {
        var r2 = -1, e2 = Vo(n2) ? jn2(n2.length) : [];
        return pe(n2, function(n3, u2, i2) {
          e2[++r2] = t2(n3, u2, i2);
        }), e2;
      }
      function Fe(n2) {
        var t2 = si(n2);
        return 1 == t2.length && t2[0][2] ? Oi(t2[0][0], t2[0][1]) : function(r2) {
          return r2 === n2 || Ce(r2, n2, t2);
        };
      }
      function Ne(t2, r2) {
        return mi(t2) && ki(r2) ? Oi(Ti(t2), r2) : function(e2) {
          var u2 = Rf(e2, t2);
          return u2 === n && u2 === r2 ? zf(e2, t2) : Le(r2, u2, 3);
        };
      }
      function Pe(t2, r2, e2, u2, i2) {
        t2 !== r2 && be(r2, function(o2, f2) {
          if (i2 || (i2 = new Jr()), tf(o2))
            !function(t3, r3, e3, u3, i3, o3, f3) {
              var a3 = zi(t3, e3), c2 = zi(r3, e3), l2 = f3.get(c2);
              if (l2)
                return void te(t3, e3, l2);
              var s2 = o3 ? o3(a3, c2, e3 + "", t3, r3, f3) : n, h2 = s2 === n;
              if (h2) {
                var p2 = Zo(c2), v2 = !p2 && Ho(c2), _2 = !p2 && !v2 && sf(c2);
                s2 = c2, p2 || v2 || _2 ? Zo(a3) ? s2 = a3 : Go(a3) ? s2 = Eu(a3) : v2 ? (h2 = false, s2 = Au(c2, true)) : _2 ? (h2 = false, s2 = Ou(c2, true)) : s2 = [] : of(c2) || qo(c2) ? (s2 = a3, qo(a3) ? s2 = bf(a3) : tf(a3) && !Qo(a3) || (s2 = yi(c2))) : h2 = false;
              }
              h2 && (f3.set(c2, s2), i3(s2, c2, u3, o3, f3), f3.delete(c2));
              te(t3, e3, s2);
            }(t2, r2, f2, e2, Pe, u2, i2);
          else {
            var a2 = u2 ? u2(zi(t2, f2), o2, f2 + "", t2, r2, i2) : n;
            a2 === n && (a2 = o2), te(t2, f2, a2);
          }
        }, Cf);
      }
      function qe(t2, r2) {
        var e2 = t2.length;
        if (e2)
          return bi(r2 += r2 < 0 ? e2 : 0, e2) ? t2[r2] : n;
      }
      function Ze(n2, t2, r2) {
        t2 = t2.length ? Wt(t2, function(n3) {
          return Zo(n3) ? function(t3) {
            return Ae(t3, 1 === n3.length ? n3[0] : n3);
          } : n3;
        }) : [
          ia
        ];
        var e2 = -1;
        t2 = Wt(t2, Jt(ci()));
        var u2 = Me(n2, function(n3, r3, u3) {
          var i2 = Wt(t2, function(t3) {
            return t3(n3);
          });
          return {
            criteria: i2,
            index: ++e2,
            value: n3
          };
        });
        return function(n3, t3) {
          var r3 = n3.length;
          for (n3.sort(t3); r3--; )
            n3[r3] = n3[r3].value;
          return n3;
        }(u2, function(n3, t3) {
          return function(n4, t4, r3) {
            var e3 = -1, u3 = n4.criteria, i2 = t4.criteria, o2 = u3.length, f2 = r3.length;
            for (; ++e3 < o2; ) {
              var a2 = Iu(u3[e3], i2[e3]);
              if (a2)
                return e3 >= f2 ? a2 : a2 * ("desc" == r3[e3] ? -1 : 1);
            }
            return n4.index - t4.index;
          }(n3, t3, r2);
        });
      }
      function Ke(n2, t2, r2) {
        for (var e2 = -1, u2 = t2.length, i2 = {}; ++e2 < u2; ) {
          var o2 = t2[e2], f2 = Ae(n2, o2);
          r2(f2, o2) && nu(i2, wu(o2, n2), f2);
        }
        return i2;
      }
      function Ve(n2, t2, r2, e2) {
        var u2 = e2 ? Ft : Mt, i2 = -1, o2 = t2.length, f2 = n2;
        for (n2 === t2 && (t2 = Eu(t2)), r2 && (f2 = Wt(n2, Jt(r2))); ++i2 < o2; )
          for (var a2 = 0, c2 = t2[i2], l2 = r2 ? r2(c2) : c2; (a2 = u2(f2, l2, a2, e2)) > -1; )
            f2 !== n2 && Xn2.call(f2, a2, 1), Xn2.call(n2, a2, 1);
        return n2;
      }
      function Ge(n2, t2) {
        for (var r2 = n2 ? t2.length : 0, e2 = r2 - 1; r2--; ) {
          var u2 = t2[r2];
          if (r2 == e2 || u2 !== i2) {
            var i2 = u2;
            bi(u2) ? Xn2.call(n2, u2, 1) : hu(n2, u2);
          }
        }
        return n2;
      }
      function He(n2, t2) {
        return n2 + Tt2(jr() * (t2 - n2 + 1));
      }
      function Je(n2, t2) {
        var r2 = "";
        if (!n2 || t2 < 1 || t2 > l)
          return r2;
        do {
          t2 % 2 && (r2 += n2), (t2 = Tt2(t2 / 2)) && (n2 += n2);
        } while (t2);
        return r2;
      }
      function Ye(n2, t2) {
        return Wi(Ii(n2, t2, ia), n2 + "");
      }
      function Qe(n2) {
        return Qr(Nf(n2));
      }
      function Xe(n2, t2) {
        var r2 = Nf(n2);
        return Ui(r2, ae(t2, 0, r2.length));
      }
      function nu(t2, r2, e2, u2) {
        if (!tf(t2))
          return t2;
        for (var i2 = -1, o2 = (r2 = wu(r2, t2)).length, f2 = o2 - 1, a2 = t2; null != a2 && ++i2 < o2; ) {
          var c2 = Ti(r2[i2]), l2 = e2;
          if ("__proto__" === c2 || "constructor" === c2 || "prototype" === c2)
            return t2;
          if (i2 != f2) {
            var s2 = a2[c2];
            (l2 = u2 ? u2(s2, c2, a2) : n) === n && (l2 = tf(s2) ? s2 : bi(r2[i2 + 1]) ? [] : {});
          }
          re(a2, c2, l2), a2 = a2[c2];
        }
        return t2;
      }
      var tu = Sr ? function(n2, t2) {
        return Sr.set(n2, t2), n2;
      } : ia, ru = st2 ? function(n2, t2) {
        return st2(n2, "toString", {
          configurable: true,
          enumerable: false,
          value: ra(t2),
          writable: true
        });
      } : ia;
      function eu(n2) {
        return Ui(Nf(n2));
      }
      function uu(n2, t2, r2) {
        var e2 = -1, u2 = n2.length;
        t2 < 0 && (t2 = -t2 > u2 ? 0 : u2 + t2), (r2 = r2 > u2 ? u2 : r2) < 0 && (r2 += u2), u2 = t2 > r2 ? 0 : r2 - t2 >>> 0, t2 >>>= 0;
        for (var i2 = jn2(u2); ++e2 < u2; )
          i2[e2] = n2[e2 + t2];
        return i2;
      }
      function iu(n2, t2) {
        var r2;
        return pe(n2, function(n3, e2, u2) {
          return !(r2 = t2(n3, e2, u2));
        }), !!r2;
      }
      function ou(n2, t2, r2) {
        var e2 = 0, u2 = null == n2 ? e2 : n2.length;
        if ("number" == typeof t2 && t2 == t2 && u2 <= 2147483647) {
          for (; e2 < u2; ) {
            var i2 = e2 + u2 >>> 1, o2 = n2[i2];
            null !== o2 && !lf(o2) && (r2 ? o2 <= t2 : o2 < t2) ? e2 = i2 + 1 : u2 = i2;
          }
          return u2;
        }
        return fu(n2, t2, ia, r2);
      }
      function fu(t2, r2, e2, u2) {
        var i2 = 0, o2 = null == t2 ? 0 : t2.length;
        if (0 === o2)
          return 0;
        for (var f2 = (r2 = e2(r2)) != r2, a2 = null === r2, c2 = lf(r2), l2 = r2 === n; i2 < o2; ) {
          var s2 = Tt2((i2 + o2) / 2), h2 = e2(t2[s2]), p2 = h2 !== n, v2 = null === h2, _2 = h2 == h2, g2 = lf(h2);
          if (f2)
            var y2 = u2 || _2;
          else
            y2 = l2 ? _2 && (u2 || p2) : a2 ? _2 && p2 && (u2 || !v2) : c2 ? _2 && p2 && !v2 && (u2 || !g2) : !v2 && !g2 && (u2 ? h2 <= r2 : h2 < r2);
          y2 ? i2 = s2 + 1 : o2 = s2;
        }
        return wr(o2, 4294967294);
      }
      function au(n2, t2) {
        for (var r2 = -1, e2 = n2.length, u2 = 0, i2 = []; ++r2 < e2; ) {
          var o2 = n2[r2], f2 = t2 ? t2(o2) : o2;
          if (!r2 || !Fo(f2, a2)) {
            var a2 = f2;
            i2[u2++] = 0 === o2 ? 0 : o2;
          }
        }
        return i2;
      }
      function cu(n2) {
        return "number" == typeof n2 ? n2 : lf(n2) ? s : +n2;
      }
      function lu(n2) {
        if ("string" == typeof n2)
          return n2;
        if (Zo(n2))
          return Wt(n2, lu) + "";
        if (lf(n2))
          return Mr ? Mr.call(n2) : "";
        var t2 = n2 + "";
        return "0" == t2 && 1 / n2 == -1 / 0 ? "-0" : t2;
      }
      function su(n2, t2, r2) {
        var e2 = -1, u2 = Et, i2 = n2.length, o2 = true, f2 = [], a2 = f2;
        if (r2)
          o2 = false, u2 = St;
        else if (i2 >= 200) {
          var c2 = t2 ? null : Ju(n2);
          if (c2)
            return ar(c2);
          o2 = false, u2 = Qt, a2 = new Hr();
        } else
          a2 = t2 ? [] : f2;
        n:
          for (; ++e2 < i2; ) {
            var l2 = n2[e2], s2 = t2 ? t2(l2) : l2;
            if (l2 = r2 || 0 !== l2 ? l2 : 0, o2 && s2 == s2) {
              for (var h2 = a2.length; h2--; )
                if (a2[h2] === s2)
                  continue n;
              t2 && a2.push(s2), f2.push(l2);
            } else
              u2(a2, s2, r2) || (a2 !== f2 && a2.push(s2), f2.push(l2));
          }
        return f2;
      }
      function hu(n2, t2) {
        return null == (n2 = Ri(n2, t2 = wu(t2, n2))) || delete n2[Ti(Ji(t2))];
      }
      function pu(n2, t2, r2, e2) {
        return nu(n2, t2, r2(Ae(n2, t2)), e2);
      }
      function vu(n2, t2, r2, e2) {
        for (var u2 = n2.length, i2 = e2 ? u2 : -1; (e2 ? i2-- : ++i2 < u2) && t2(n2[i2], i2, n2); )
          ;
        return r2 ? uu(n2, e2 ? 0 : i2, e2 ? i2 + 1 : u2) : uu(n2, e2 ? i2 + 1 : 0, e2 ? u2 : i2);
      }
      function _u(n2, t2) {
        var r2 = n2;
        return r2 instanceof Zr && (r2 = r2.value()), Ct(t2, function(n3, t3) {
          return t3.func.apply(t3.thisArg, Lt([
            n3
          ], t3.args));
        }, r2);
      }
      function gu(n2, t2, r2) {
        var e2 = n2.length;
        if (e2 < 2)
          return e2 ? su(n2[0]) : [];
        for (var u2 = -1, i2 = jn2(e2); ++u2 < e2; )
          for (var o2 = n2[u2], f2 = -1; ++f2 < e2; )
            f2 != u2 && (i2[u2] = he(i2[u2] || o2, n2[f2], t2, r2));
        return su(de(i2, 1), t2, r2);
      }
      function yu(t2, r2, e2) {
        for (var u2 = -1, i2 = t2.length, o2 = r2.length, f2 = {}; ++u2 < i2; ) {
          var a2 = u2 < o2 ? r2[u2] : n;
          e2(f2, t2[u2], a2);
        }
        return f2;
      }
      function du(n2) {
        return Go(n2) ? n2 : [];
      }
      function bu(n2) {
        return "function" == typeof n2 ? n2 : ia;
      }
      function wu(n2, t2) {
        return Zo(n2) ? n2 : mi(n2, t2) ? [
          n2
        ] : Bi(wf(n2));
      }
      var mu = Ye;
      function xu(t2, r2, e2) {
        var u2 = t2.length;
        return e2 = e2 === n ? u2 : e2, !r2 && e2 >= u2 ? t2 : uu(t2, r2, e2);
      }
      var ju = pt2 || function(n2) {
        return ht.clearTimeout(n2);
      };
      function Au(n2, t2) {
        if (t2)
          return n2.slice();
        var r2 = n2.length, e2 = Vn2 ? Vn2(r2) : new n2.constructor(r2);
        return n2.copy(e2), e2;
      }
      function ku(n2) {
        var t2 = new n2.constructor(n2.byteLength);
        return new Kn2(t2).set(new Kn2(n2)), t2;
      }
      function Ou(n2, t2) {
        var r2 = t2 ? ku(n2.buffer) : n2.buffer;
        return new n2.constructor(r2, n2.byteOffset, n2.length);
      }
      function Iu(t2, r2) {
        if (t2 !== r2) {
          var e2 = t2 !== n, u2 = null === t2, i2 = t2 == t2, o2 = lf(t2), f2 = r2 !== n, a2 = null === r2, c2 = r2 == r2, l2 = lf(r2);
          if (!a2 && !l2 && !o2 && t2 > r2 || o2 && f2 && c2 && !a2 && !l2 || u2 && f2 && c2 || !e2 && c2 || !i2)
            return 1;
          if (!u2 && !o2 && !l2 && t2 < r2 || l2 && e2 && i2 && !u2 && !o2 || a2 && e2 && i2 || !f2 && i2 || !c2)
            return -1;
        }
        return 0;
      }
      function Ru(n2, t2, r2, e2) {
        for (var u2 = -1, i2 = n2.length, o2 = r2.length, f2 = -1, a2 = t2.length, c2 = br(i2 - o2, 0), l2 = jn2(a2 + c2), s2 = !e2; ++f2 < a2; )
          l2[f2] = t2[f2];
        for (; ++u2 < o2; )
          (s2 || u2 < i2) && (l2[r2[u2]] = n2[u2]);
        for (; c2--; )
          l2[f2++] = n2[u2++];
        return l2;
      }
      function zu(n2, t2, r2, e2) {
        for (var u2 = -1, i2 = n2.length, o2 = -1, f2 = r2.length, a2 = -1, c2 = t2.length, l2 = br(i2 - f2, 0), s2 = jn2(l2 + c2), h2 = !e2; ++u2 < l2; )
          s2[u2] = n2[u2];
        for (var p2 = u2; ++a2 < c2; )
          s2[p2 + a2] = t2[a2];
        for (; ++o2 < f2; )
          (h2 || u2 < i2) && (s2[p2 + r2[o2]] = n2[u2++]);
        return s2;
      }
      function Eu(n2, t2) {
        var r2 = -1, e2 = n2.length;
        for (t2 || (t2 = jn2(e2)); ++r2 < e2; )
          t2[r2] = n2[r2];
        return t2;
      }
      function Su(t2, r2, e2, u2) {
        var i2 = !e2;
        e2 || (e2 = {});
        for (var o2 = -1, f2 = r2.length; ++o2 < f2; ) {
          var a2 = r2[o2], c2 = u2 ? u2(e2[a2], t2[a2], a2, e2, t2) : n;
          c2 === n && (c2 = t2[a2]), i2 ? oe(e2, a2, c2) : re(e2, a2, c2);
        }
        return e2;
      }
      function Wu(n2, t2) {
        return function(r2, e2) {
          var u2 = Zo(r2) ? kt : ue, i2 = t2 ? t2() : {};
          return u2(r2, n2, ci(e2, 2), i2);
        };
      }
      function Lu(t2) {
        return Ye(function(r2, e2) {
          var u2 = -1, i2 = e2.length, o2 = i2 > 1 ? e2[i2 - 1] : n, f2 = i2 > 2 ? e2[2] : n;
          for (o2 = t2.length > 3 && "function" == typeof o2 ? (i2--, o2) : n, f2 && wi(e2[0], e2[1], f2) && (o2 = i2 < 3 ? n : o2, i2 = 1), r2 = Rn2(r2); ++u2 < i2; ) {
            var a2 = e2[u2];
            a2 && t2(r2, a2, u2, o2);
          }
          return r2;
        });
      }
      function Cu(n2, t2) {
        return function(r2, e2) {
          if (null == r2)
            return r2;
          if (!Vo(r2))
            return n2(r2, e2);
          for (var u2 = r2.length, i2 = t2 ? u2 : -1, o2 = Rn2(r2); (t2 ? i2-- : ++i2 < u2) && false !== e2(o2[i2], i2, o2); )
            ;
          return r2;
        };
      }
      function Uu(n2) {
        return function(t2, r2, e2) {
          for (var u2 = -1, i2 = Rn2(t2), o2 = e2(t2), f2 = o2.length; f2--; ) {
            var a2 = o2[n2 ? f2 : ++u2];
            if (false === r2(i2[a2], a2, i2))
              break;
          }
          return t2;
        };
      }
      function Bu(t2) {
        return function(r2) {
          var e2 = ur(r2 = wf(r2)) ? sr(r2) : n, u2 = e2 ? e2[0] : r2.charAt(0), i2 = e2 ? xu(e2, 1).join("") : r2.slice(1);
          return u2[t2]() + i2;
        };
      }
      function Tu(n2) {
        return function(t2) {
          return Ct(Xf(Zf(t2).replace(Yn, "")), n2, "");
        };
      }
      function $u(n2) {
        return function() {
          var t2 = arguments;
          switch (t2.length) {
            case 0:
              return new n2();
            case 1:
              return new n2(t2[0]);
            case 2:
              return new n2(t2[0], t2[1]);
            case 3:
              return new n2(t2[0], t2[1], t2[2]);
            case 4:
              return new n2(t2[0], t2[1], t2[2], t2[3]);
            case 5:
              return new n2(t2[0], t2[1], t2[2], t2[3], t2[4]);
            case 6:
              return new n2(t2[0], t2[1], t2[2], t2[3], t2[4], t2[5]);
            case 7:
              return new n2(t2[0], t2[1], t2[2], t2[3], t2[4], t2[5], t2[6]);
          }
          var r2 = Nr(n2.prototype), e2 = n2.apply(r2, t2);
          return tf(e2) ? e2 : r2;
        };
      }
      function Du(t2) {
        return function(r2, e2, u2) {
          var i2 = Rn2(r2);
          if (!Vo(r2)) {
            var o2 = ci(e2, 3);
            r2 = Lf(r2), e2 = function(n2) {
              return o2(i2[n2], n2, i2);
            };
          }
          var f2 = t2(r2, e2, u2);
          return f2 > -1 ? i2[o2 ? r2[f2] : f2] : n;
        };
      }
      function Mu(r2) {
        return ei(function(e2) {
          var u2 = e2.length, i2 = u2, o2 = qr.prototype.thru;
          for (r2 && e2.reverse(); i2--; ) {
            var f2 = e2[i2];
            if ("function" != typeof f2)
              throw new Sn2(t);
            if (o2 && !a2 && "wrapper" == fi(f2))
              var a2 = new qr([], true);
          }
          for (i2 = a2 ? i2 : u2; ++i2 < u2; ) {
            var c2 = fi(f2 = e2[i2]), l2 = "wrapper" == c2 ? oi(f2) : n;
            a2 = l2 && xi(l2[0]) && 424 == l2[1] && !l2[4].length && 1 == l2[9] ? a2[fi(l2[0])].apply(a2, l2[3]) : 1 == f2.length && xi(f2) ? a2[c2]() : a2.thru(f2);
          }
          return function() {
            var n2 = arguments, t2 = n2[0];
            if (a2 && 1 == n2.length && Zo(t2))
              return a2.plant(t2).value();
            for (var r3 = 0, i3 = u2 ? e2[r3].apply(this, n2) : t2; ++r3 < u2; )
              i3 = e2[r3].call(this, i3);
            return i3;
          };
        });
      }
      function Fu(t2, r2, e2, u2, i2, o2, a2, c2, l2, s2) {
        var h2 = r2 & f, p2 = 1 & r2, v2 = 2 & r2, _2 = 24 & r2, g2 = 512 & r2, y2 = v2 ? n : $u(t2);
        return function f2() {
          for (var d2 = arguments.length, b2 = jn2(d2), w2 = d2; w2--; )
            b2[w2] = arguments[w2];
          if (_2)
            var m2 = ai(f2), x2 = function(n2, t3) {
              for (var r3 = n2.length, e3 = 0; r3--; )
                n2[r3] === t3 && ++e3;
              return e3;
            }(b2, m2);
          if (u2 && (b2 = Ru(b2, u2, i2, _2)), o2 && (b2 = zu(b2, o2, a2, _2)), d2 -= x2, _2 && d2 < s2) {
            var j2 = fr(b2, m2);
            return Gu(t2, r2, Fu, f2.placeholder, e2, b2, j2, c2, l2, s2 - d2);
          }
          var A2 = p2 ? e2 : this, k2 = v2 ? A2[t2] : t2;
          return d2 = b2.length, c2 ? b2 = function(t3, r3) {
            var e3 = t3.length, u3 = wr(r3.length, e3), i3 = Eu(t3);
            for (; u3--; ) {
              var o3 = r3[u3];
              t3[u3] = bi(o3, e3) ? i3[o3] : n;
            }
            return t3;
          }(b2, c2) : g2 && d2 > 1 && b2.reverse(), h2 && l2 < d2 && (b2.length = l2), this && this !== ht && this instanceof f2 && (k2 = y2 || $u(k2)), k2.apply(A2, b2);
        };
      }
      function Nu(n2, t2) {
        return function(r2, e2) {
          return function(n3, t3, r3, e3) {
            return me(n3, function(n4, u2, i2) {
              t3(e3, r3(n4), u2, i2);
            }), e3;
          }(r2, n2, t2(e2), {});
        };
      }
      function Pu(t2, r2) {
        return function(e2, u2) {
          var i2;
          if (e2 === n && u2 === n)
            return r2;
          if (e2 !== n && (i2 = e2), u2 !== n) {
            if (i2 === n)
              return u2;
            "string" == typeof e2 || "string" == typeof u2 ? (e2 = lu(e2), u2 = lu(u2)) : (e2 = cu(e2), u2 = cu(u2)), i2 = t2(e2, u2);
          }
          return i2;
        };
      }
      function qu(n2) {
        return ei(function(t2) {
          return t2 = Wt(t2, Jt(ci())), Ye(function(r2) {
            var e2 = this;
            return n2(t2, function(n3) {
              return At(n3, e2, r2);
            });
          });
        });
      }
      function Zu(t2, r2) {
        var e2 = (r2 = r2 === n ? " " : lu(r2)).length;
        if (e2 < 2)
          return e2 ? Je(r2, t2) : r2;
        var u2 = Je(r2, yt2(t2 / lr(r2)));
        return ur(r2) ? xu(sr(u2), 0, t2).join("") : u2.slice(0, t2);
      }
      function Ku(t2) {
        return function(r2, e2, u2) {
          return u2 && "number" != typeof u2 && wi(r2, e2, u2) && (e2 = u2 = n), r2 = _f(r2), e2 === n ? (e2 = r2, r2 = 0) : e2 = _f(e2), function(n2, t3, r3, e3) {
            for (var u3 = -1, i2 = br(yt2((t3 - n2) / (r3 || 1)), 0), o2 = jn2(i2); i2--; )
              o2[e3 ? i2 : ++u3] = n2, n2 += r3;
            return o2;
          }(r2, e2, u2 = u2 === n ? r2 < e2 ? 1 : -1 : _f(u2), t2);
        };
      }
      function Vu(n2) {
        return function(t2, r2) {
          return "string" == typeof t2 && "string" == typeof r2 || (t2 = df(t2), r2 = df(r2)), n2(t2, r2);
        };
      }
      function Gu(t2, r2, e2, u2, f2, a2, c2, l2, s2, h2) {
        var p2 = 8 & r2;
        r2 |= p2 ? i : o, 4 & (r2 &= ~(p2 ? o : i)) || (r2 &= -4);
        var v2 = [
          t2,
          r2,
          f2,
          p2 ? a2 : n,
          p2 ? c2 : n,
          p2 ? n : a2,
          p2 ? n : c2,
          l2,
          s2,
          h2
        ], _2 = e2.apply(n, v2);
        return xi(t2) && Ei(_2, v2), _2.placeholder = u2, Li(_2, t2, r2);
      }
      function Hu(n2) {
        var t2 = In2[n2];
        return function(n3, r2) {
          if (n3 = df(n3), (r2 = null == r2 ? 0 : wr(gf(r2), 292)) && gr(n3)) {
            var e2 = (wf(n3) + "e").split("e");
            return +((e2 = (wf(t2(e2[0] + "e" + (+e2[1] + r2))) + "e").split("e"))[0] + "e" + (+e2[1] - r2));
          }
          return t2(n3);
        };
      }
      var Ju = Rr && 1 / ar(new Rr([
        ,
        -0
      ]))[1] == c ? function(n2) {
        return new Rr(n2);
      } : la;
      function Yu(n2) {
        return function(t2) {
          var r2 = _i(t2);
          return r2 == m ? ir(t2) : r2 == O ? cr(t2) : function(n3, t3) {
            return Wt(t3, function(t4) {
              return [
                t4,
                n3[t4]
              ];
            });
          }(t2, n2(t2));
        };
      }
      function Qu(r2, c2, l2, s2, h2, p2, v2, _2) {
        var g2 = 2 & c2;
        if (!g2 && "function" != typeof r2)
          throw new Sn2(t);
        var y2 = s2 ? s2.length : 0;
        if (y2 || (c2 &= -97, s2 = h2 = n), v2 = v2 === n ? v2 : br(gf(v2), 0), _2 = _2 === n ? _2 : gf(_2), y2 -= h2 ? h2.length : 0, c2 & o) {
          var d2 = s2, b2 = h2;
          s2 = h2 = n;
        }
        var w2 = g2 ? n : oi(r2), m2 = [
          r2,
          c2,
          l2,
          s2,
          h2,
          d2,
          b2,
          p2,
          v2,
          _2
        ];
        if (w2 && function(n2, t2) {
          var r3 = n2[1], u2 = t2[1], i2 = r3 | u2, o2 = i2 < 131, c3 = u2 == f && 8 == r3 || u2 == f && r3 == a && n2[7].length <= t2[8] || 384 == u2 && t2[7].length <= t2[8] && 8 == r3;
          if (!o2 && !c3)
            return n2;
          1 & u2 && (n2[2] = t2[2], i2 |= 1 & r3 ? 0 : 4);
          var l3 = t2[3];
          if (l3) {
            var s3 = n2[3];
            n2[3] = s3 ? Ru(s3, l3, t2[4]) : l3, n2[4] = s3 ? fr(n2[3], e) : t2[4];
          }
          (l3 = t2[5]) && (s3 = n2[5], n2[5] = s3 ? zu(s3, l3, t2[6]) : l3, n2[6] = s3 ? fr(n2[5], e) : t2[6]);
          (l3 = t2[7]) && (n2[7] = l3);
          u2 & f && (n2[8] = null == n2[8] ? t2[8] : wr(n2[8], t2[8]));
          null == n2[9] && (n2[9] = t2[9]);
          n2[0] = t2[0], n2[1] = i2;
        }(m2, w2), r2 = m2[0], c2 = m2[1], l2 = m2[2], s2 = m2[3], h2 = m2[4], !(_2 = m2[9] = m2[9] === n ? g2 ? 0 : r2.length : br(m2[9] - y2, 0)) && 24 & c2 && (c2 &= -25), c2 && 1 != c2)
          x2 = 8 == c2 || c2 == u ? function(t2, r3, e2) {
            var u2 = $u(t2);
            return function i2() {
              for (var o2 = arguments.length, f2 = jn2(o2), a2 = o2, c3 = ai(i2); a2--; )
                f2[a2] = arguments[a2];
              var l3 = o2 < 3 && f2[0] !== c3 && f2[o2 - 1] !== c3 ? [] : fr(f2, c3);
              return (o2 -= l3.length) < e2 ? Gu(t2, r3, Fu, i2.placeholder, n, f2, l3, n, n, e2 - o2) : At(this && this !== ht && this instanceof i2 ? u2 : t2, this, f2);
            };
          }(r2, c2, _2) : c2 != i && 33 != c2 || h2.length ? Fu.apply(n, m2) : function(n2, t2, r3, e2) {
            var u2 = 1 & t2, i2 = $u(n2);
            return function t3() {
              for (var o2 = -1, f2 = arguments.length, a2 = -1, c3 = e2.length, l3 = jn2(c3 + f2), s3 = this && this !== ht && this instanceof t3 ? i2 : n2; ++a2 < c3; )
                l3[a2] = e2[a2];
              for (; f2--; )
                l3[a2++] = arguments[++o2];
              return At(s3, u2 ? r3 : this, l3);
            };
          }(r2, c2, l2, s2);
        else
          var x2 = function(n2, t2, r3) {
            var e2 = 1 & t2, u2 = $u(n2);
            return function t3() {
              return (this && this !== ht && this instanceof t3 ? u2 : n2).apply(e2 ? r3 : this, arguments);
            };
          }(r2, c2, l2);
        return Li((w2 ? tu : Ei)(x2, m2), r2, c2);
      }
      function Xu(t2, r2, e2, u2) {
        return t2 === n || Fo(t2, Cn2[e2]) && !Tn2.call(u2, e2) ? r2 : t2;
      }
      function ni(t2, r2, e2, u2, i2, o2) {
        return tf(t2) && tf(r2) && (o2.set(r2, t2), Pe(t2, r2, n, ni, o2), o2.delete(r2)), t2;
      }
      function ti(t2) {
        return of(t2) ? n : t2;
      }
      function ri(t2, r2, e2, u2, i2, o2) {
        var f2 = 1 & e2, a2 = t2.length, c2 = r2.length;
        if (a2 != c2 && !(f2 && c2 > a2))
          return false;
        var l2 = o2.get(t2), s2 = o2.get(r2);
        if (l2 && s2)
          return l2 == r2 && s2 == t2;
        var h2 = -1, p2 = true, v2 = 2 & e2 ? new Hr() : n;
        for (o2.set(t2, r2), o2.set(r2, t2); ++h2 < a2; ) {
          var _2 = t2[h2], g2 = r2[h2];
          if (u2)
            var y2 = f2 ? u2(g2, _2, h2, r2, t2, o2) : u2(_2, g2, h2, t2, r2, o2);
          if (y2 !== n) {
            if (y2)
              continue;
            p2 = false;
            break;
          }
          if (v2) {
            if (!Bt(r2, function(n2, t3) {
              if (!Qt(v2, t3) && (_2 === n2 || i2(_2, n2, e2, u2, o2)))
                return v2.push(t3);
            })) {
              p2 = false;
              break;
            }
          } else if (_2 !== g2 && !i2(_2, g2, e2, u2, o2)) {
            p2 = false;
            break;
          }
        }
        return o2.delete(t2), o2.delete(r2), p2;
      }
      function ei(t2) {
        return Wi(Ii(t2, n, Zi), t2 + "");
      }
      function ui(n2) {
        return ke(n2, Lf, pi);
      }
      function ii(n2) {
        return ke(n2, Cf, vi);
      }
      var oi = Sr ? function(n2) {
        return Sr.get(n2);
      } : la;
      function fi(n2) {
        for (var t2 = n2.name + "", r2 = Wr[t2], e2 = Tn2.call(Wr, t2) ? r2.length : 0; e2--; ) {
          var u2 = r2[e2], i2 = u2.func;
          if (null == i2 || i2 == n2)
            return u2.name;
        }
        return t2;
      }
      function ai(n2) {
        return (Tn2.call(Fr, "placeholder") ? Fr : n2).placeholder;
      }
      function ci() {
        var n2 = Fr.iteratee || oa;
        return n2 = n2 === oa ? Be : n2, arguments.length ? n2(arguments[0], arguments[1]) : n2;
      }
      function li(n2, t2) {
        var r2, e2, u2 = n2.__data__;
        return ("string" == (e2 = typeof (r2 = t2)) || "number" == e2 || "symbol" == e2 || "boolean" == e2 ? "__proto__" !== r2 : null === r2) ? u2["string" == typeof t2 ? "string" : "hash"] : u2.map;
      }
      function si(n2) {
        for (var t2 = Lf(n2), r2 = t2.length; r2--; ) {
          var e2 = t2[r2], u2 = n2[e2];
          t2[r2] = [
            e2,
            u2,
            ki(u2)
          ];
        }
        return t2;
      }
      function hi(t2, r2) {
        var e2 = function(t3, r3) {
          return null == t3 ? n : t3[r3];
        }(t2, r2);
        return Ue(e2) ? e2 : n;
      }
      var pi = Zt2 ? function(n2) {
        return null == n2 ? [] : (n2 = Rn2(n2), zt(Zt2(n2), function(t2) {
          return Jn2.call(n2, t2);
        }));
      } : ya, vi = Zt2 ? function(n2) {
        for (var t2 = []; n2; )
          Lt(t2, pi(n2)), n2 = Gn2(n2);
        return t2;
      } : ya, _i = Oe;
      function gi(n2, t2, r2) {
        for (var e2 = -1, u2 = (t2 = wu(t2, n2)).length, i2 = false; ++e2 < u2; ) {
          var o2 = Ti(t2[e2]);
          if (!(i2 = null != n2 && r2(n2, o2)))
            break;
          n2 = n2[o2];
        }
        return i2 || ++e2 != u2 ? i2 : !!(u2 = null == n2 ? 0 : n2.length) && nf(u2) && bi(o2, u2) && (Zo(n2) || qo(n2));
      }
      function yi(n2) {
        return "function" != typeof n2.constructor || Ai(n2) ? {} : Nr(Gn2(n2));
      }
      function di(n2) {
        return Zo(n2) || qo(n2) || !!(tt2 && n2 && n2[tt2]);
      }
      function bi(n2, t2) {
        var r2 = typeof n2;
        return !!(t2 = null == t2 ? l : t2) && ("number" == r2 || "symbol" != r2 && yn.test(n2)) && n2 > -1 && n2 % 1 == 0 && n2 < t2;
      }
      function wi(n2, t2, r2) {
        if (!tf(r2))
          return false;
        var e2 = typeof t2;
        return !!("number" == e2 ? Vo(r2) && bi(t2, r2.length) : "string" == e2 && t2 in r2) && Fo(r2[t2], n2);
      }
      function mi(n2, t2) {
        if (Zo(n2))
          return false;
        var r2 = typeof n2;
        return !("number" != r2 && "symbol" != r2 && "boolean" != r2 && null != n2 && !lf(n2)) || Q.test(n2) || !Y.test(n2) || null != t2 && n2 in Rn2(t2);
      }
      function xi(n2) {
        var t2 = fi(n2), r2 = Fr[t2];
        if ("function" != typeof r2 || !(t2 in Zr.prototype))
          return false;
        if (n2 === r2)
          return true;
        var e2 = oi(r2);
        return !!e2 && n2 === e2[0];
      }
      (kr && _i(new kr(new ArrayBuffer(1))) != S || Or && _i(new Or()) != m || Ir && _i(Ir.resolve()) != A || Rr && _i(new Rr()) != O || zr && _i(new zr()) != z) && (_i = function(t2) {
        var r2 = Oe(t2), e2 = r2 == j ? t2.constructor : n, u2 = e2 ? $i(e2) : "";
        if (u2)
          switch (u2) {
            case Lr:
              return S;
            case Cr:
              return m;
            case Ur:
              return A;
            case Br:
              return O;
            case Tr:
              return z;
          }
        return r2;
      });
      var ji = Un2 ? Qo : da;
      function Ai(n2) {
        var t2 = n2 && n2.constructor;
        return n2 === ("function" == typeof t2 && t2.prototype || Cn2);
      }
      function ki(n2) {
        return n2 == n2 && !tf(n2);
      }
      function Oi(t2, r2) {
        return function(e2) {
          return null != e2 && e2[t2] === r2 && (r2 !== n || t2 in Rn2(e2));
        };
      }
      function Ii(t2, r2, e2) {
        return r2 = br(r2 === n ? t2.length - 1 : r2, 0), function() {
          for (var n2 = arguments, u2 = -1, i2 = br(n2.length - r2, 0), o2 = jn2(i2); ++u2 < i2; )
            o2[u2] = n2[r2 + u2];
          u2 = -1;
          for (var f2 = jn2(r2 + 1); ++u2 < r2; )
            f2[u2] = n2[u2];
          return f2[r2] = e2(o2), At(t2, this, f2);
        };
      }
      function Ri(n2, t2) {
        return t2.length < 2 ? n2 : Ae(n2, uu(t2, 0, -1));
      }
      function zi(n2, t2) {
        if (("constructor" !== t2 || "function" != typeof n2[t2]) && "__proto__" != t2)
          return n2[t2];
      }
      var Ei = Ci(tu), Si = gt2 || function(n2, t2) {
        return ht.setTimeout(n2, t2);
      }, Wi = Ci(ru);
      function Li(n2, t2, r2) {
        var e2 = t2 + "";
        return Wi(n2, function(n3, t3) {
          var r3 = t3.length;
          if (!r3)
            return n3;
          var e3 = r3 - 1;
          return t3[e3] = (r3 > 1 ? "& " : "") + t3[e3], t3 = t3.join(r3 > 2 ? ", " : " "), n3.replace(un, "{\n/* [wrapped with " + t3 + "] */\n");
        }(e2, function(n3, t3) {
          return Ot(p, function(r3) {
            var e3 = "_." + r3[0];
            t3 & r3[1] && !Et(n3, e3) && n3.push(e3);
          }), n3.sort();
        }(function(n3) {
          var t3 = n3.match(on);
          return t3 ? t3[1].split(fn) : [];
        }(e2), r2)));
      }
      function Ci(t2) {
        var r2 = 0, e2 = 0;
        return function() {
          var u2 = mr(), i2 = 16 - (u2 - e2);
          if (e2 = u2, i2 > 0) {
            if (++r2 >= 800)
              return arguments[0];
          } else
            r2 = 0;
          return t2.apply(n, arguments);
        };
      }
      function Ui(t2, r2) {
        var e2 = -1, u2 = t2.length, i2 = u2 - 1;
        for (r2 = r2 === n ? u2 : r2; ++e2 < r2; ) {
          var o2 = He(e2, i2), f2 = t2[o2];
          t2[o2] = t2[e2], t2[e2] = f2;
        }
        return t2.length = r2, t2;
      }
      var Bi = function(n2) {
        var t2 = Uo(n2, function(n3) {
          return 500 === r2.size && r2.clear(), n3;
        }), r2 = t2.cache;
        return t2;
      }(function(n2) {
        var t2 = [];
        return 46 === n2.charCodeAt(0) && t2.push(""), n2.replace(X, function(n3, r2, e2, u2) {
          t2.push(e2 ? u2.replace(ln, "$1") : r2 || n3);
        }), t2;
      });
      function Ti(n2) {
        if ("string" == typeof n2 || lf(n2))
          return n2;
        var t2 = n2 + "";
        return "0" == t2 && 1 / n2 == -1 / 0 ? "-0" : t2;
      }
      function $i(n2) {
        if (null != n2) {
          try {
            return Bn2.call(n2);
          } catch (n3) {
          }
          try {
            return n2 + "";
          } catch (n3) {
          }
        }
        return "";
      }
      function Di(n2) {
        if (n2 instanceof Zr)
          return n2.clone();
        var t2 = new qr(n2.__wrapped__, n2.__chain__);
        return t2.__actions__ = Eu(n2.__actions__), t2.__index__ = n2.__index__, t2.__values__ = n2.__values__, t2;
      }
      var Mi = Ye(function(n2, t2) {
        return Go(n2) ? he(n2, de(t2, 1, Go, true)) : [];
      }), Fi = Ye(function(t2, r2) {
        var e2 = Ji(r2);
        return Go(e2) && (e2 = n), Go(t2) ? he(t2, de(r2, 1, Go, true), ci(e2, 2)) : [];
      }), Ni = Ye(function(t2, r2) {
        var e2 = Ji(r2);
        return Go(e2) && (e2 = n), Go(t2) ? he(t2, de(r2, 1, Go, true), n, e2) : [];
      });
      function Pi(n2, t2, r2) {
        var e2 = null == n2 ? 0 : n2.length;
        if (!e2)
          return -1;
        var u2 = null == r2 ? 0 : gf(r2);
        return u2 < 0 && (u2 = br(e2 + u2, 0)), Dt(n2, ci(t2, 3), u2);
      }
      function qi(t2, r2, e2) {
        var u2 = null == t2 ? 0 : t2.length;
        if (!u2)
          return -1;
        var i2 = u2 - 1;
        return e2 !== n && (i2 = gf(e2), i2 = e2 < 0 ? br(u2 + i2, 0) : wr(i2, u2 - 1)), Dt(t2, ci(r2, 3), i2, true);
      }
      function Zi(n2) {
        return (null == n2 ? 0 : n2.length) ? de(n2, 1) : [];
      }
      function Ki(t2) {
        return t2 && t2.length ? t2[0] : n;
      }
      var Vi = Ye(function(n2) {
        var t2 = Wt(n2, du);
        return t2.length && t2[0] === n2[0] ? Ee(t2) : [];
      }), Gi = Ye(function(t2) {
        var r2 = Ji(t2), e2 = Wt(t2, du);
        return r2 === Ji(e2) ? r2 = n : e2.pop(), e2.length && e2[0] === t2[0] ? Ee(e2, ci(r2, 2)) : [];
      }), Hi = Ye(function(t2) {
        var r2 = Ji(t2), e2 = Wt(t2, du);
        return (r2 = "function" == typeof r2 ? r2 : n) && e2.pop(), e2.length && e2[0] === t2[0] ? Ee(e2, n, r2) : [];
      });
      function Ji(t2) {
        var r2 = null == t2 ? 0 : t2.length;
        return r2 ? t2[r2 - 1] : n;
      }
      var Yi = Ye(Qi);
      function Qi(n2, t2) {
        return n2 && n2.length && t2 && t2.length ? Ve(n2, t2) : n2;
      }
      var Xi = ei(function(n2, t2) {
        var r2 = null == n2 ? 0 : n2.length, e2 = fe(n2, t2);
        return Ge(n2, Wt(t2, function(n3) {
          return bi(n3, r2) ? +n3 : n3;
        }).sort(Iu)), e2;
      });
      function no(n2) {
        return null == n2 ? n2 : Ar.call(n2);
      }
      var to = Ye(function(n2) {
        return su(de(n2, 1, Go, true));
      }), ro = Ye(function(t2) {
        var r2 = Ji(t2);
        return Go(r2) && (r2 = n), su(de(t2, 1, Go, true), ci(r2, 2));
      }), eo = Ye(function(t2) {
        var r2 = Ji(t2);
        return r2 = "function" == typeof r2 ? r2 : n, su(de(t2, 1, Go, true), n, r2);
      });
      function uo(n2) {
        if (!n2 || !n2.length)
          return [];
        var t2 = 0;
        return n2 = zt(n2, function(n3) {
          if (Go(n3))
            return t2 = br(n3.length, t2), true;
        }), Gt(t2, function(t3) {
          return Wt(n2, qt(t3));
        });
      }
      function io(t2, r2) {
        if (!t2 || !t2.length)
          return [];
        var e2 = uo(t2);
        return null == r2 ? e2 : Wt(e2, function(t3) {
          return At(r2, n, t3);
        });
      }
      var oo = Ye(function(n2, t2) {
        return Go(n2) ? he(n2, t2) : [];
      }), fo = Ye(function(n2) {
        return gu(zt(n2, Go));
      }), ao = Ye(function(t2) {
        var r2 = Ji(t2);
        return Go(r2) && (r2 = n), gu(zt(t2, Go), ci(r2, 2));
      }), co = Ye(function(t2) {
        var r2 = Ji(t2);
        return r2 = "function" == typeof r2 ? r2 : n, gu(zt(t2, Go), n, r2);
      }), lo = Ye(uo);
      var so = Ye(function(t2) {
        var r2 = t2.length, e2 = r2 > 1 ? t2[r2 - 1] : n;
        return e2 = "function" == typeof e2 ? (t2.pop(), e2) : n, io(t2, e2);
      });
      function ho(n2) {
        var t2 = Fr(n2);
        return t2.__chain__ = true, t2;
      }
      function po(n2, t2) {
        return t2(n2);
      }
      var vo = ei(function(t2) {
        var r2 = t2.length, e2 = r2 ? t2[0] : 0, u2 = this.__wrapped__, i2 = function(n2) {
          return fe(n2, t2);
        };
        return !(r2 > 1 || this.__actions__.length) && u2 instanceof Zr && bi(e2) ? ((u2 = u2.slice(e2, +e2 + (r2 ? 1 : 0))).__actions__.push({
          func: po,
          args: [
            i2
          ],
          thisArg: n
        }), new qr(u2, this.__chain__).thru(function(t3) {
          return r2 && !t3.length && t3.push(n), t3;
        })) : this.thru(i2);
      });
      var _o = Wu(function(n2, t2, r2) {
        Tn2.call(n2, r2) ? ++n2[r2] : oe(n2, r2, 1);
      });
      var go = Du(Pi), yo = Du(qi);
      function bo(n2, t2) {
        return (Zo(n2) ? Ot : pe)(n2, ci(t2, 3));
      }
      function wo(n2, t2) {
        return (Zo(n2) ? It : ve)(n2, ci(t2, 3));
      }
      var mo = Wu(function(n2, t2, r2) {
        Tn2.call(n2, r2) ? n2[r2].push(t2) : oe(n2, r2, [
          t2
        ]);
      });
      var xo = Ye(function(n2, t2, r2) {
        var e2 = -1, u2 = "function" == typeof t2, i2 = Vo(n2) ? jn2(n2.length) : [];
        return pe(n2, function(n3) {
          i2[++e2] = u2 ? At(t2, n3, r2) : Se(n3, t2, r2);
        }), i2;
      }), jo = Wu(function(n2, t2, r2) {
        oe(n2, r2, t2);
      });
      function Ao(n2, t2) {
        return (Zo(n2) ? Wt : Me)(n2, ci(t2, 3));
      }
      var ko = Wu(function(n2, t2, r2) {
        n2[r2 ? 0 : 1].push(t2);
      }, function() {
        return [
          [],
          []
        ];
      });
      var Oo = Ye(function(n2, t2) {
        if (null == n2)
          return [];
        var r2 = t2.length;
        return r2 > 1 && wi(n2, t2[0], t2[1]) ? t2 = [] : r2 > 2 && wi(t2[0], t2[1], t2[2]) && (t2 = [
          t2[0]
        ]), Ze(n2, de(t2, 1), []);
      }), Io = vt2 || function() {
        return ht.Date.now();
      };
      function Ro(t2, r2, e2) {
        return r2 = e2 ? n : r2, r2 = t2 && null == r2 ? t2.length : r2, Qu(t2, f, n, n, n, n, r2);
      }
      function zo(r2, e2) {
        var u2;
        if ("function" != typeof e2)
          throw new Sn2(t);
        return r2 = gf(r2), function() {
          return --r2 > 0 && (u2 = e2.apply(this, arguments)), r2 <= 1 && (e2 = n), u2;
        };
      }
      var Eo = Ye(function(n2, t2, r2) {
        var e2 = 1;
        if (r2.length) {
          var u2 = fr(r2, ai(Eo));
          e2 |= i;
        }
        return Qu(n2, e2, t2, r2, u2);
      }), So = Ye(function(n2, t2, r2) {
        var e2 = 3;
        if (r2.length) {
          var u2 = fr(r2, ai(So));
          e2 |= i;
        }
        return Qu(t2, e2, n2, r2, u2);
      });
      function Wo(r2, e2, u2) {
        var i2, o2, f2, a2, c2, l2, s2 = 0, h2 = false, p2 = false, v2 = true;
        if ("function" != typeof r2)
          throw new Sn2(t);
        function _2(t2) {
          var e3 = i2, u3 = o2;
          return i2 = o2 = n, s2 = t2, a2 = r2.apply(u3, e3);
        }
        function g2(t2) {
          var r3 = t2 - l2;
          return l2 === n || r3 >= e2 || r3 < 0 || p2 && t2 - s2 >= f2;
        }
        function y2() {
          var n2 = Io();
          if (g2(n2))
            return d2(n2);
          c2 = Si(y2, function(n3) {
            var t2 = e2 - (n3 - l2);
            return p2 ? wr(t2, f2 - (n3 - s2)) : t2;
          }(n2));
        }
        function d2(t2) {
          return c2 = n, v2 && i2 ? _2(t2) : (i2 = o2 = n, a2);
        }
        function b2() {
          var t2 = Io(), r3 = g2(t2);
          if (i2 = arguments, o2 = this, l2 = t2, r3) {
            if (c2 === n)
              return function(n2) {
                return s2 = n2, c2 = Si(y2, e2), h2 ? _2(n2) : a2;
              }(l2);
            if (p2)
              return ju(c2), c2 = Si(y2, e2), _2(l2);
          }
          return c2 === n && (c2 = Si(y2, e2)), a2;
        }
        return e2 = df(e2) || 0, tf(u2) && (h2 = !!u2.leading, f2 = (p2 = "maxWait" in u2) ? br(df(u2.maxWait) || 0, e2) : f2, v2 = "trailing" in u2 ? !!u2.trailing : v2), b2.cancel = function() {
          c2 !== n && ju(c2), s2 = 0, i2 = l2 = o2 = c2 = n;
        }, b2.flush = function() {
          return c2 === n ? a2 : d2(Io());
        }, b2;
      }
      var Lo = Ye(function(n2, t2) {
        return se(n2, 1, t2);
      }), Co = Ye(function(n2, t2, r2) {
        return se(n2, df(t2) || 0, r2);
      });
      function Uo(n2, r2) {
        if ("function" != typeof n2 || null != r2 && "function" != typeof r2)
          throw new Sn2(t);
        var e2 = function() {
          var t2 = arguments, u2 = r2 ? r2.apply(this, t2) : t2[0], i2 = e2.cache;
          if (i2.has(u2))
            return i2.get(u2);
          var o2 = n2.apply(this, t2);
          return e2.cache = i2.set(u2, o2) || i2, o2;
        };
        return e2.cache = new (Uo.Cache || Gr)(), e2;
      }
      function Bo(n2) {
        if ("function" != typeof n2)
          throw new Sn2(t);
        return function() {
          var t2 = arguments;
          switch (t2.length) {
            case 0:
              return !n2.call(this);
            case 1:
              return !n2.call(this, t2[0]);
            case 2:
              return !n2.call(this, t2[0], t2[1]);
            case 3:
              return !n2.call(this, t2[0], t2[1], t2[2]);
          }
          return !n2.apply(this, t2);
        };
      }
      Uo.Cache = Gr;
      var To = mu(function(n2, t2) {
        var r2 = (t2 = 1 == t2.length && Zo(t2[0]) ? Wt(t2[0], Jt(ci())) : Wt(de(t2, 1), Jt(ci()))).length;
        return Ye(function(e2) {
          for (var u2 = -1, i2 = wr(e2.length, r2); ++u2 < i2; )
            e2[u2] = t2[u2].call(this, e2[u2]);
          return At(n2, this, e2);
        });
      }), $o = Ye(function(t2, r2) {
        var e2 = fr(r2, ai($o));
        return Qu(t2, i, n, r2, e2);
      }), Do = Ye(function(t2, r2) {
        var e2 = fr(r2, ai(Do));
        return Qu(t2, o, n, r2, e2);
      }), Mo = ei(function(t2, r2) {
        return Qu(t2, a, n, n, n, r2);
      });
      function Fo(n2, t2) {
        return n2 === t2 || n2 != n2 && t2 != t2;
      }
      var No = Vu(Ie), Po = Vu(function(n2, t2) {
        return n2 >= t2;
      }), qo = We(function() {
        return arguments;
      }()) ? We : function(n2) {
        return rf(n2) && Tn2.call(n2, "callee") && !Jn2.call(n2, "callee");
      }, Zo = jn2.isArray, Ko = dt ? Jt(dt) : function(n2) {
        return rf(n2) && Oe(n2) == E;
      };
      function Vo(n2) {
        return null != n2 && nf(n2.length) && !Qo(n2);
      }
      function Go(n2) {
        return rf(n2) && Vo(n2);
      }
      var Ho = _r || da, Jo = bt ? Jt(bt) : function(n2) {
        return rf(n2) && Oe(n2) == y;
      };
      function Yo(n2) {
        if (!rf(n2))
          return false;
        var t2 = Oe(n2);
        return t2 == d || "[object DOMException]" == t2 || "string" == typeof n2.message && "string" == typeof n2.name && !of(n2);
      }
      function Qo(n2) {
        if (!tf(n2))
          return false;
        var t2 = Oe(n2);
        return t2 == b || t2 == w || "[object AsyncFunction]" == t2 || "[object Proxy]" == t2;
      }
      function Xo(n2) {
        return "number" == typeof n2 && n2 == gf(n2);
      }
      function nf(n2) {
        return "number" == typeof n2 && n2 > -1 && n2 % 1 == 0 && n2 <= l;
      }
      function tf(n2) {
        var t2 = typeof n2;
        return null != n2 && ("object" == t2 || "function" == t2);
      }
      function rf(n2) {
        return null != n2 && "object" == typeof n2;
      }
      var ef = wt ? Jt(wt) : function(n2) {
        return rf(n2) && _i(n2) == m;
      };
      function uf(n2) {
        return "number" == typeof n2 || rf(n2) && Oe(n2) == x;
      }
      function of(n2) {
        if (!rf(n2) || Oe(n2) != j)
          return false;
        var t2 = Gn2(n2);
        if (null === t2)
          return true;
        var r2 = Tn2.call(t2, "constructor") && t2.constructor;
        return "function" == typeof r2 && r2 instanceof r2 && Bn2.call(r2) == Fn2;
      }
      var ff = mt ? Jt(mt) : function(n2) {
        return rf(n2) && Oe(n2) == k;
      };
      var af = xt ? Jt(xt) : function(n2) {
        return rf(n2) && _i(n2) == O;
      };
      function cf(n2) {
        return "string" == typeof n2 || !Zo(n2) && rf(n2) && Oe(n2) == I;
      }
      function lf(n2) {
        return "symbol" == typeof n2 || rf(n2) && Oe(n2) == R;
      }
      var sf = jt ? Jt(jt) : function(n2) {
        return rf(n2) && nf(n2.length) && !!it[Oe(n2)];
      };
      var hf = Vu(De), pf = Vu(function(n2, t2) {
        return n2 <= t2;
      });
      function vf(n2) {
        if (!n2)
          return [];
        if (Vo(n2))
          return cf(n2) ? sr(n2) : Eu(n2);
        if (ft2 && n2[ft2])
          return function(n3) {
            for (var t3, r2 = []; !(t3 = n3.next()).done; )
              r2.push(t3.value);
            return r2;
          }(n2[ft2]());
        var t2 = _i(n2);
        return (t2 == m ? ir : t2 == O ? ar : Nf)(n2);
      }
      function _f(n2) {
        return n2 ? (n2 = df(n2)) === c || n2 === -1 / 0 ? 17976931348623157e292 * (n2 < 0 ? -1 : 1) : n2 == n2 ? n2 : 0 : 0 === n2 ? n2 : 0;
      }
      function gf(n2) {
        var t2 = _f(n2), r2 = t2 % 1;
        return t2 == t2 ? r2 ? t2 - r2 : t2 : 0;
      }
      function yf(n2) {
        return n2 ? ae(gf(n2), 0, h) : 0;
      }
      function df(n2) {
        if ("number" == typeof n2)
          return n2;
        if (lf(n2))
          return s;
        if (tf(n2)) {
          var t2 = "function" == typeof n2.valueOf ? n2.valueOf() : n2;
          n2 = tf(t2) ? t2 + "" : t2;
        }
        if ("string" != typeof n2)
          return 0 === n2 ? n2 : +n2;
        n2 = Ht(n2);
        var r2 = vn.test(n2);
        return r2 || gn.test(n2) ? ct(n2.slice(2), r2 ? 2 : 8) : pn.test(n2) ? s : +n2;
      }
      function bf(n2) {
        return Su(n2, Cf(n2));
      }
      function wf(n2) {
        return null == n2 ? "" : lu(n2);
      }
      var mf = Lu(function(n2, t2) {
        if (Ai(t2) || Vo(t2))
          Su(t2, Lf(t2), n2);
        else
          for (var r2 in t2)
            Tn2.call(t2, r2) && re(n2, r2, t2[r2]);
      }), xf = Lu(function(n2, t2) {
        Su(t2, Cf(t2), n2);
      }), jf = Lu(function(n2, t2, r2, e2) {
        Su(t2, Cf(t2), n2, e2);
      }), Af = Lu(function(n2, t2, r2, e2) {
        Su(t2, Lf(t2), n2, e2);
      }), kf = ei(fe);
      var Of = Ye(function(t2, r2) {
        t2 = Rn2(t2);
        var e2 = -1, u2 = r2.length, i2 = u2 > 2 ? r2[2] : n;
        for (i2 && wi(r2[0], r2[1], i2) && (u2 = 1); ++e2 < u2; )
          for (var o2 = r2[e2], f2 = Cf(o2), a2 = -1, c2 = f2.length; ++a2 < c2; ) {
            var l2 = f2[a2], s2 = t2[l2];
            (s2 === n || Fo(s2, Cn2[l2]) && !Tn2.call(t2, l2)) && (t2[l2] = o2[l2]);
          }
        return t2;
      }), If = Ye(function(t2) {
        return t2.push(n, ni), At(Bf, n, t2);
      });
      function Rf(t2, r2, e2) {
        var u2 = null == t2 ? n : Ae(t2, r2);
        return u2 === n ? e2 : u2;
      }
      function zf(n2, t2) {
        return null != n2 && gi(n2, t2, ze);
      }
      var Ef = Nu(function(n2, t2, r2) {
        null != t2 && "function" != typeof t2.toString && (t2 = Mn2.call(t2)), n2[t2] = r2;
      }, ra(ia)), Sf = Nu(function(n2, t2, r2) {
        null != t2 && "function" != typeof t2.toString && (t2 = Mn2.call(t2)), Tn2.call(n2, t2) ? n2[t2].push(r2) : n2[t2] = [
          r2
        ];
      }, ci), Wf = Ye(Se);
      function Lf(n2) {
        return Vo(n2) ? Yr(n2) : Te(n2);
      }
      function Cf(n2) {
        return Vo(n2) ? Yr(n2, true) : $e(n2);
      }
      var Uf = Lu(function(n2, t2, r2) {
        Pe(n2, t2, r2);
      }), Bf = Lu(function(n2, t2, r2, e2) {
        Pe(n2, t2, r2, e2);
      }), Tf = ei(function(n2, t2) {
        var r2 = {};
        if (null == n2)
          return r2;
        var e2 = false;
        t2 = Wt(t2, function(t3) {
          return t3 = wu(t3, n2), e2 || (e2 = t3.length > 1), t3;
        }), Su(n2, ii(n2), r2), e2 && (r2 = ce(r2, 7, ti));
        for (var u2 = t2.length; u2--; )
          hu(r2, t2[u2]);
        return r2;
      });
      var $f = ei(function(n2, t2) {
        return null == n2 ? {} : function(n3, t3) {
          return Ke(n3, t3, function(t4, r2) {
            return zf(n3, r2);
          });
        }(n2, t2);
      });
      function Df(n2, t2) {
        if (null == n2)
          return {};
        var r2 = Wt(ii(n2), function(n3) {
          return [
            n3
          ];
        });
        return t2 = ci(t2), Ke(n2, r2, function(n3, r3) {
          return t2(n3, r3[0]);
        });
      }
      var Mf = Yu(Lf), Ff = Yu(Cf);
      function Nf(n2) {
        return null == n2 ? [] : Yt(n2, Lf(n2));
      }
      var Pf = Tu(function(n2, t2, r2) {
        return t2 = t2.toLowerCase(), n2 + (r2 ? qf(t2) : t2);
      });
      function qf(n2) {
        return Qf(wf(n2).toLowerCase());
      }
      function Zf(n2) {
        return (n2 = wf(n2)) && n2.replace(dn, tr).replace(Qn, "");
      }
      var Kf = Tu(function(n2, t2, r2) {
        return n2 + (r2 ? "-" : "") + t2.toLowerCase();
      }), Vf = Tu(function(n2, t2, r2) {
        return n2 + (r2 ? " " : "") + t2.toLowerCase();
      }), Gf = Bu("toLowerCase");
      var Hf = Tu(function(n2, t2, r2) {
        return n2 + (r2 ? "_" : "") + t2.toLowerCase();
      });
      var Jf = Tu(function(n2, t2, r2) {
        return n2 + (r2 ? " " : "") + Qf(t2);
      });
      var Yf = Tu(function(n2, t2, r2) {
        return n2 + (r2 ? " " : "") + t2.toUpperCase();
      }), Qf = Bu("toUpperCase");
      function Xf(t2, r2, e2) {
        return t2 = wf(t2), (r2 = e2 ? n : r2) === n ? function(n2) {
          return rt.test(n2);
        }(t2) ? function(n2) {
          return n2.match(nt) || [];
        }(t2) : function(n2) {
          return n2.match(an) || [];
        }(t2) : t2.match(r2) || [];
      }
      var na = Ye(function(t2, r2) {
        try {
          return At(t2, n, r2);
        } catch (n2) {
          return Yo(n2) ? n2 : new kn2(n2);
        }
      }), ta = ei(function(n2, t2) {
        return Ot(t2, function(t3) {
          t3 = Ti(t3), oe(n2, t3, Eo(n2[t3], n2));
        }), n2;
      });
      function ra(n2) {
        return function() {
          return n2;
        };
      }
      var ea = Mu(), ua = Mu(true);
      function ia(n2) {
        return n2;
      }
      function oa(n2) {
        return Be("function" == typeof n2 ? n2 : ce(n2, 1));
      }
      var fa = Ye(function(n2, t2) {
        return function(r2) {
          return Se(r2, n2, t2);
        };
      }), aa = Ye(function(n2, t2) {
        return function(r2) {
          return Se(n2, r2, t2);
        };
      });
      function ca(n2, t2, r2) {
        var e2 = Lf(t2), u2 = je(t2, e2);
        null != r2 || tf(t2) && (u2.length || !e2.length) || (r2 = t2, t2 = n2, n2 = this, u2 = je(t2, Lf(t2)));
        var i2 = !(tf(r2) && "chain" in r2 && !r2.chain), o2 = Qo(n2);
        return Ot(u2, function(r3) {
          var e3 = t2[r3];
          n2[r3] = e3, o2 && (n2.prototype[r3] = function() {
            var t3 = this.__chain__;
            if (i2 || t3) {
              var r4 = n2(this.__wrapped__);
              return (r4.__actions__ = Eu(this.__actions__)).push({
                func: e3,
                args: arguments,
                thisArg: n2
              }), r4.__chain__ = t3, r4;
            }
            return e3.apply(n2, Lt([
              this.value()
            ], arguments));
          });
        }), n2;
      }
      function la() {
      }
      var sa = qu(Wt), ha = qu(Rt), pa = qu(Bt);
      function va(n2) {
        return mi(n2) ? qt(Ti(n2)) : function(n3) {
          return function(t2) {
            return Ae(t2, n3);
          };
        }(n2);
      }
      var _a = Ku(), ga = Ku(true);
      function ya() {
        return [];
      }
      function da() {
        return false;
      }
      var ba = Pu(function(n2, t2) {
        return n2 + t2;
      }, 0), wa = Hu("ceil"), ma = Pu(function(n2, t2) {
        return n2 / t2;
      }, 1), xa = Hu("floor");
      var ja, Aa = Pu(function(n2, t2) {
        return n2 * t2;
      }, 1), ka = Hu("round"), Oa = Pu(function(n2, t2) {
        return n2 - t2;
      }, 0);
      return Fr.after = function(n2, r2) {
        if ("function" != typeof r2)
          throw new Sn2(t);
        return n2 = gf(n2), function() {
          if (--n2 < 1)
            return r2.apply(this, arguments);
        };
      }, Fr.ary = Ro, Fr.assign = mf, Fr.assignIn = xf, Fr.assignInWith = jf, Fr.assignWith = Af, Fr.at = kf, Fr.before = zo, Fr.bind = Eo, Fr.bindAll = ta, Fr.bindKey = So, Fr.castArray = function() {
        if (!arguments.length)
          return [];
        var n2 = arguments[0];
        return Zo(n2) ? n2 : [
          n2
        ];
      }, Fr.chain = ho, Fr.chunk = function(t2, r2, e2) {
        r2 = (e2 ? wi(t2, r2, e2) : r2 === n) ? 1 : br(gf(r2), 0);
        var u2 = null == t2 ? 0 : t2.length;
        if (!u2 || r2 < 1)
          return [];
        for (var i2 = 0, o2 = 0, f2 = jn2(yt2(u2 / r2)); i2 < u2; )
          f2[o2++] = uu(t2, i2, i2 += r2);
        return f2;
      }, Fr.compact = function(n2) {
        for (var t2 = -1, r2 = null == n2 ? 0 : n2.length, e2 = 0, u2 = []; ++t2 < r2; ) {
          var i2 = n2[t2];
          i2 && (u2[e2++] = i2);
        }
        return u2;
      }, Fr.concat = function() {
        var n2 = arguments.length;
        if (!n2)
          return [];
        for (var t2 = jn2(n2 - 1), r2 = arguments[0], e2 = n2; e2--; )
          t2[e2 - 1] = arguments[e2];
        return Lt(Zo(r2) ? Eu(r2) : [
          r2
        ], de(t2, 1));
      }, Fr.cond = function(n2) {
        var r2 = null == n2 ? 0 : n2.length, e2 = ci();
        return n2 = r2 ? Wt(n2, function(n3) {
          if ("function" != typeof n3[1])
            throw new Sn2(t);
          return [
            e2(n3[0]),
            n3[1]
          ];
        }) : [], Ye(function(t2) {
          for (var e3 = -1; ++e3 < r2; ) {
            var u2 = n2[e3];
            if (At(u2[0], this, t2))
              return At(u2[1], this, t2);
          }
        });
      }, Fr.conforms = function(n2) {
        return function(n3) {
          var t2 = Lf(n3);
          return function(r2) {
            return le(r2, n3, t2);
          };
        }(ce(n2, 1));
      }, Fr.constant = ra, Fr.countBy = _o, Fr.create = function(n2, t2) {
        var r2 = Nr(n2);
        return null == t2 ? r2 : ie(r2, t2);
      }, Fr.curry = function t2(r2, e2, u2) {
        var i2 = Qu(r2, 8, n, n, n, n, n, e2 = u2 ? n : e2);
        return i2.placeholder = t2.placeholder, i2;
      }, Fr.curryRight = function t2(r2, e2, i2) {
        var o2 = Qu(r2, u, n, n, n, n, n, e2 = i2 ? n : e2);
        return o2.placeholder = t2.placeholder, o2;
      }, Fr.debounce = Wo, Fr.defaults = Of, Fr.defaultsDeep = If, Fr.defer = Lo, Fr.delay = Co, Fr.difference = Mi, Fr.differenceBy = Fi, Fr.differenceWith = Ni, Fr.drop = function(t2, r2, e2) {
        var u2 = null == t2 ? 0 : t2.length;
        return u2 ? uu(t2, (r2 = e2 || r2 === n ? 1 : gf(r2)) < 0 ? 0 : r2, u2) : [];
      }, Fr.dropRight = function(t2, r2, e2) {
        var u2 = null == t2 ? 0 : t2.length;
        return u2 ? uu(t2, 0, (r2 = u2 - (r2 = e2 || r2 === n ? 1 : gf(r2))) < 0 ? 0 : r2) : [];
      }, Fr.dropRightWhile = function(n2, t2) {
        return n2 && n2.length ? vu(n2, ci(t2, 3), true, true) : [];
      }, Fr.dropWhile = function(n2, t2) {
        return n2 && n2.length ? vu(n2, ci(t2, 3), true) : [];
      }, Fr.fill = function(t2, r2, e2, u2) {
        var i2 = null == t2 ? 0 : t2.length;
        return i2 ? (e2 && "number" != typeof e2 && wi(t2, r2, e2) && (e2 = 0, u2 = i2), function(t3, r3, e3, u3) {
          var i3 = t3.length;
          for ((e3 = gf(e3)) < 0 && (e3 = -e3 > i3 ? 0 : i3 + e3), (u3 = u3 === n || u3 > i3 ? i3 : gf(u3)) < 0 && (u3 += i3), u3 = e3 > u3 ? 0 : yf(u3); e3 < u3; )
            t3[e3++] = r3;
          return t3;
        }(t2, r2, e2, u2)) : [];
      }, Fr.filter = function(n2, t2) {
        return (Zo(n2) ? zt : ye)(n2, ci(t2, 3));
      }, Fr.flatMap = function(n2, t2) {
        return de(Ao(n2, t2), 1);
      }, Fr.flatMapDeep = function(n2, t2) {
        return de(Ao(n2, t2), c);
      }, Fr.flatMapDepth = function(t2, r2, e2) {
        return e2 = e2 === n ? 1 : gf(e2), de(Ao(t2, r2), e2);
      }, Fr.flatten = Zi, Fr.flattenDeep = function(n2) {
        return (null == n2 ? 0 : n2.length) ? de(n2, c) : [];
      }, Fr.flattenDepth = function(t2, r2) {
        return (null == t2 ? 0 : t2.length) ? de(t2, r2 = r2 === n ? 1 : gf(r2)) : [];
      }, Fr.flip = function(n2) {
        return Qu(n2, 512);
      }, Fr.flow = ea, Fr.flowRight = ua, Fr.fromPairs = function(n2) {
        for (var t2 = -1, r2 = null == n2 ? 0 : n2.length, e2 = {}; ++t2 < r2; ) {
          var u2 = n2[t2];
          e2[u2[0]] = u2[1];
        }
        return e2;
      }, Fr.functions = function(n2) {
        return null == n2 ? [] : je(n2, Lf(n2));
      }, Fr.functionsIn = function(n2) {
        return null == n2 ? [] : je(n2, Cf(n2));
      }, Fr.groupBy = mo, Fr.initial = function(n2) {
        return (null == n2 ? 0 : n2.length) ? uu(n2, 0, -1) : [];
      }, Fr.intersection = Vi, Fr.intersectionBy = Gi, Fr.intersectionWith = Hi, Fr.invert = Ef, Fr.invertBy = Sf, Fr.invokeMap = xo, Fr.iteratee = oa, Fr.keyBy = jo, Fr.keys = Lf, Fr.keysIn = Cf, Fr.map = Ao, Fr.mapKeys = function(n2, t2) {
        var r2 = {};
        return t2 = ci(t2, 3), me(n2, function(n3, e2, u2) {
          oe(r2, t2(n3, e2, u2), n3);
        }), r2;
      }, Fr.mapValues = function(n2, t2) {
        var r2 = {};
        return t2 = ci(t2, 3), me(n2, function(n3, e2, u2) {
          oe(r2, e2, t2(n3, e2, u2));
        }), r2;
      }, Fr.matches = function(n2) {
        return Fe(ce(n2, 1));
      }, Fr.matchesProperty = function(n2, t2) {
        return Ne(n2, ce(t2, 1));
      }, Fr.memoize = Uo, Fr.merge = Uf, Fr.mergeWith = Bf, Fr.method = fa, Fr.methodOf = aa, Fr.mixin = ca, Fr.negate = Bo, Fr.nthArg = function(n2) {
        return n2 = gf(n2), Ye(function(t2) {
          return qe(t2, n2);
        });
      }, Fr.omit = Tf, Fr.omitBy = function(n2, t2) {
        return Df(n2, Bo(ci(t2)));
      }, Fr.once = function(n2) {
        return zo(2, n2);
      }, Fr.orderBy = function(t2, r2, e2, u2) {
        return null == t2 ? [] : (Zo(r2) || (r2 = null == r2 ? [] : [
          r2
        ]), Zo(e2 = u2 ? n : e2) || (e2 = null == e2 ? [] : [
          e2
        ]), Ze(t2, r2, e2));
      }, Fr.over = sa, Fr.overArgs = To, Fr.overEvery = ha, Fr.overSome = pa, Fr.partial = $o, Fr.partialRight = Do, Fr.partition = ko, Fr.pick = $f, Fr.pickBy = Df, Fr.property = va, Fr.propertyOf = function(t2) {
        return function(r2) {
          return null == t2 ? n : Ae(t2, r2);
        };
      }, Fr.pull = Yi, Fr.pullAll = Qi, Fr.pullAllBy = function(n2, t2, r2) {
        return n2 && n2.length && t2 && t2.length ? Ve(n2, t2, ci(r2, 2)) : n2;
      }, Fr.pullAllWith = function(t2, r2, e2) {
        return t2 && t2.length && r2 && r2.length ? Ve(t2, r2, n, e2) : t2;
      }, Fr.pullAt = Xi, Fr.range = _a, Fr.rangeRight = ga, Fr.rearg = Mo, Fr.reject = function(n2, t2) {
        return (Zo(n2) ? zt : ye)(n2, Bo(ci(t2, 3)));
      }, Fr.remove = function(n2, t2) {
        var r2 = [];
        if (!n2 || !n2.length)
          return r2;
        var e2 = -1, u2 = [], i2 = n2.length;
        for (t2 = ci(t2, 3); ++e2 < i2; ) {
          var o2 = n2[e2];
          t2(o2, e2, n2) && (r2.push(o2), u2.push(e2));
        }
        return Ge(n2, u2), r2;
      }, Fr.rest = function(r2, e2) {
        if ("function" != typeof r2)
          throw new Sn2(t);
        return Ye(r2, e2 = e2 === n ? e2 : gf(e2));
      }, Fr.reverse = no, Fr.sampleSize = function(t2, r2, e2) {
        return r2 = (e2 ? wi(t2, r2, e2) : r2 === n) ? 1 : gf(r2), (Zo(t2) ? Xr : Xe)(t2, r2);
      }, Fr.set = function(n2, t2, r2) {
        return null == n2 ? n2 : nu(n2, t2, r2);
      }, Fr.setWith = function(t2, r2, e2, u2) {
        return u2 = "function" == typeof u2 ? u2 : n, null == t2 ? t2 : nu(t2, r2, e2, u2);
      }, Fr.shuffle = function(n2) {
        return (Zo(n2) ? ne : eu)(n2);
      }, Fr.slice = function(t2, r2, e2) {
        var u2 = null == t2 ? 0 : t2.length;
        return u2 ? (e2 && "number" != typeof e2 && wi(t2, r2, e2) ? (r2 = 0, e2 = u2) : (r2 = null == r2 ? 0 : gf(r2), e2 = e2 === n ? u2 : gf(e2)), uu(t2, r2, e2)) : [];
      }, Fr.sortBy = Oo, Fr.sortedUniq = function(n2) {
        return n2 && n2.length ? au(n2) : [];
      }, Fr.sortedUniqBy = function(n2, t2) {
        return n2 && n2.length ? au(n2, ci(t2, 2)) : [];
      }, Fr.split = function(t2, r2, e2) {
        return e2 && "number" != typeof e2 && wi(t2, r2, e2) && (r2 = e2 = n), (e2 = e2 === n ? h : e2 >>> 0) ? (t2 = wf(t2)) && ("string" == typeof r2 || null != r2 && !ff(r2)) && !(r2 = lu(r2)) && ur(t2) ? xu(sr(t2), 0, e2) : t2.split(r2, e2) : [];
      }, Fr.spread = function(n2, r2) {
        if ("function" != typeof n2)
          throw new Sn2(t);
        return r2 = null == r2 ? 0 : br(gf(r2), 0), Ye(function(t2) {
          var e2 = t2[r2], u2 = xu(t2, 0, r2);
          return e2 && Lt(u2, e2), At(n2, this, u2);
        });
      }, Fr.tail = function(n2) {
        var t2 = null == n2 ? 0 : n2.length;
        return t2 ? uu(n2, 1, t2) : [];
      }, Fr.take = function(t2, r2, e2) {
        return t2 && t2.length ? uu(t2, 0, (r2 = e2 || r2 === n ? 1 : gf(r2)) < 0 ? 0 : r2) : [];
      }, Fr.takeRight = function(t2, r2, e2) {
        var u2 = null == t2 ? 0 : t2.length;
        return u2 ? uu(t2, (r2 = u2 - (r2 = e2 || r2 === n ? 1 : gf(r2))) < 0 ? 0 : r2, u2) : [];
      }, Fr.takeRightWhile = function(n2, t2) {
        return n2 && n2.length ? vu(n2, ci(t2, 3), false, true) : [];
      }, Fr.takeWhile = function(n2, t2) {
        return n2 && n2.length ? vu(n2, ci(t2, 3)) : [];
      }, Fr.tap = function(n2, t2) {
        return t2(n2), n2;
      }, Fr.throttle = function(n2, r2, e2) {
        var u2 = true, i2 = true;
        if ("function" != typeof n2)
          throw new Sn2(t);
        return tf(e2) && (u2 = "leading" in e2 ? !!e2.leading : u2, i2 = "trailing" in e2 ? !!e2.trailing : i2), Wo(n2, r2, {
          leading: u2,
          maxWait: r2,
          trailing: i2
        });
      }, Fr.thru = po, Fr.toArray = vf, Fr.toPairs = Mf, Fr.toPairsIn = Ff, Fr.toPath = function(n2) {
        return Zo(n2) ? Wt(n2, Ti) : lf(n2) ? [
          n2
        ] : Eu(Bi(wf(n2)));
      }, Fr.toPlainObject = bf, Fr.transform = function(n2, t2, r2) {
        var e2 = Zo(n2), u2 = e2 || Ho(n2) || sf(n2);
        if (t2 = ci(t2, 4), null == r2) {
          var i2 = n2 && n2.constructor;
          r2 = u2 ? e2 ? new i2() : [] : tf(n2) && Qo(i2) ? Nr(Gn2(n2)) : {};
        }
        return (u2 ? Ot : me)(n2, function(n3, e3, u3) {
          return t2(r2, n3, e3, u3);
        }), r2;
      }, Fr.unary = function(n2) {
        return Ro(n2, 1);
      }, Fr.union = to, Fr.unionBy = ro, Fr.unionWith = eo, Fr.uniq = function(n2) {
        return n2 && n2.length ? su(n2) : [];
      }, Fr.uniqBy = function(n2, t2) {
        return n2 && n2.length ? su(n2, ci(t2, 2)) : [];
      }, Fr.uniqWith = function(t2, r2) {
        return r2 = "function" == typeof r2 ? r2 : n, t2 && t2.length ? su(t2, n, r2) : [];
      }, Fr.unset = function(n2, t2) {
        return null == n2 || hu(n2, t2);
      }, Fr.unzip = uo, Fr.unzipWith = io, Fr.update = function(n2, t2, r2) {
        return null == n2 ? n2 : pu(n2, t2, bu(r2));
      }, Fr.updateWith = function(t2, r2, e2, u2) {
        return u2 = "function" == typeof u2 ? u2 : n, null == t2 ? t2 : pu(t2, r2, bu(e2), u2);
      }, Fr.values = Nf, Fr.valuesIn = function(n2) {
        return null == n2 ? [] : Yt(n2, Cf(n2));
      }, Fr.without = oo, Fr.words = Xf, Fr.wrap = function(n2, t2) {
        return $o(bu(t2), n2);
      }, Fr.xor = fo, Fr.xorBy = ao, Fr.xorWith = co, Fr.zip = lo, Fr.zipObject = function(n2, t2) {
        return yu(n2 || [], t2 || [], re);
      }, Fr.zipObjectDeep = function(n2, t2) {
        return yu(n2 || [], t2 || [], nu);
      }, Fr.zipWith = so, Fr.entries = Mf, Fr.entriesIn = Ff, Fr.extend = xf, Fr.extendWith = jf, ca(Fr, Fr), Fr.add = ba, Fr.attempt = na, Fr.camelCase = Pf, Fr.capitalize = qf, Fr.ceil = wa, Fr.clamp = function(t2, r2, e2) {
        return e2 === n && (e2 = r2, r2 = n), e2 !== n && (e2 = (e2 = df(e2)) == e2 ? e2 : 0), r2 !== n && (r2 = (r2 = df(r2)) == r2 ? r2 : 0), ae(df(t2), r2, e2);
      }, Fr.clone = function(n2) {
        return ce(n2, 4);
      }, Fr.cloneDeep = function(n2) {
        return ce(n2, 5);
      }, Fr.cloneDeepWith = function(t2, r2) {
        return ce(t2, 5, r2 = "function" == typeof r2 ? r2 : n);
      }, Fr.cloneWith = function(t2, r2) {
        return ce(t2, 4, r2 = "function" == typeof r2 ? r2 : n);
      }, Fr.conformsTo = function(n2, t2) {
        return null == t2 || le(n2, t2, Lf(t2));
      }, Fr.deburr = Zf, Fr.defaultTo = function(n2, t2) {
        return null == n2 || n2 != n2 ? t2 : n2;
      }, Fr.divide = ma, Fr.endsWith = function(t2, r2, e2) {
        t2 = wf(t2), r2 = lu(r2);
        var u2 = t2.length, i2 = e2 = e2 === n ? u2 : ae(gf(e2), 0, u2);
        return (e2 -= r2.length) >= 0 && t2.slice(e2, i2) == r2;
      }, Fr.eq = Fo, Fr.escape = function(n2) {
        return (n2 = wf(n2)) && V.test(n2) ? n2.replace(Z, rr) : n2;
      }, Fr.escapeRegExp = function(n2) {
        return (n2 = wf(n2)) && tn.test(n2) ? n2.replace(nn, "\\$&") : n2;
      }, Fr.every = function(t2, r2, e2) {
        var u2 = Zo(t2) ? Rt : _e;
        return e2 && wi(t2, r2, e2) && (r2 = n), u2(t2, ci(r2, 3));
      }, Fr.find = go, Fr.findIndex = Pi, Fr.findKey = function(n2, t2) {
        return $t(n2, ci(t2, 3), me);
      }, Fr.findLast = yo, Fr.findLastIndex = qi, Fr.findLastKey = function(n2, t2) {
        return $t(n2, ci(t2, 3), xe);
      }, Fr.floor = xa, Fr.forEach = bo, Fr.forEachRight = wo, Fr.forIn = function(n2, t2) {
        return null == n2 ? n2 : be(n2, ci(t2, 3), Cf);
      }, Fr.forInRight = function(n2, t2) {
        return null == n2 ? n2 : we(n2, ci(t2, 3), Cf);
      }, Fr.forOwn = function(n2, t2) {
        return n2 && me(n2, ci(t2, 3));
      }, Fr.forOwnRight = function(n2, t2) {
        return n2 && xe(n2, ci(t2, 3));
      }, Fr.get = Rf, Fr.gt = No, Fr.gte = Po, Fr.has = function(n2, t2) {
        return null != n2 && gi(n2, t2, Re);
      }, Fr.hasIn = zf, Fr.head = Ki, Fr.identity = ia, Fr.includes = function(n2, t2, r2, e2) {
        n2 = Vo(n2) ? n2 : Nf(n2), r2 = r2 && !e2 ? gf(r2) : 0;
        var u2 = n2.length;
        return r2 < 0 && (r2 = br(u2 + r2, 0)), cf(n2) ? r2 <= u2 && n2.indexOf(t2, r2) > -1 : !!u2 && Mt(n2, t2, r2) > -1;
      }, Fr.indexOf = function(n2, t2, r2) {
        var e2 = null == n2 ? 0 : n2.length;
        if (!e2)
          return -1;
        var u2 = null == r2 ? 0 : gf(r2);
        return u2 < 0 && (u2 = br(e2 + u2, 0)), Mt(n2, t2, u2);
      }, Fr.inRange = function(t2, r2, e2) {
        return r2 = _f(r2), e2 === n ? (e2 = r2, r2 = 0) : e2 = _f(e2), function(n2, t3, r3) {
          return n2 >= wr(t3, r3) && n2 < br(t3, r3);
        }(t2 = df(t2), r2, e2);
      }, Fr.invoke = Wf, Fr.isArguments = qo, Fr.isArray = Zo, Fr.isArrayBuffer = Ko, Fr.isArrayLike = Vo, Fr.isArrayLikeObject = Go, Fr.isBoolean = function(n2) {
        return true === n2 || false === n2 || rf(n2) && Oe(n2) == g;
      }, Fr.isBuffer = Ho, Fr.isDate = Jo, Fr.isElement = function(n2) {
        return rf(n2) && 1 === n2.nodeType && !of(n2);
      }, Fr.isEmpty = function(n2) {
        if (null == n2)
          return true;
        if (Vo(n2) && (Zo(n2) || "string" == typeof n2 || "function" == typeof n2.splice || Ho(n2) || sf(n2) || qo(n2)))
          return !n2.length;
        var t2 = _i(n2);
        if (t2 == m || t2 == O)
          return !n2.size;
        if (Ai(n2))
          return !Te(n2).length;
        for (var r2 in n2)
          if (Tn2.call(n2, r2))
            return false;
        return true;
      }, Fr.isEqual = function(n2, t2) {
        return Le(n2, t2);
      }, Fr.isEqualWith = function(t2, r2, e2) {
        var u2 = (e2 = "function" == typeof e2 ? e2 : n) ? e2(t2, r2) : n;
        return u2 === n ? Le(t2, r2, n, e2) : !!u2;
      }, Fr.isError = Yo, Fr.isFinite = function(n2) {
        return "number" == typeof n2 && gr(n2);
      }, Fr.isFunction = Qo, Fr.isInteger = Xo, Fr.isLength = nf, Fr.isMap = ef, Fr.isMatch = function(n2, t2) {
        return n2 === t2 || Ce(n2, t2, si(t2));
      }, Fr.isMatchWith = function(t2, r2, e2) {
        return e2 = "function" == typeof e2 ? e2 : n, Ce(t2, r2, si(r2), e2);
      }, Fr.isNaN = function(n2) {
        return uf(n2) && n2 != +n2;
      }, Fr.isNative = function(n2) {
        if (ji(n2))
          throw new kn2("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return Ue(n2);
      }, Fr.isNil = function(n2) {
        return null == n2;
      }, Fr.isNull = function(n2) {
        return null === n2;
      }, Fr.isNumber = uf, Fr.isObject = tf, Fr.isObjectLike = rf, Fr.isPlainObject = of, Fr.isRegExp = ff, Fr.isSafeInteger = function(n2) {
        return Xo(n2) && n2 >= -9007199254740991 && n2 <= l;
      }, Fr.isSet = af, Fr.isString = cf, Fr.isSymbol = lf, Fr.isTypedArray = sf, Fr.isUndefined = function(t2) {
        return t2 === n;
      }, Fr.isWeakMap = function(n2) {
        return rf(n2) && _i(n2) == z;
      }, Fr.isWeakSet = function(n2) {
        return rf(n2) && "[object WeakSet]" == Oe(n2);
      }, Fr.join = function(n2, t2) {
        return null == n2 ? "" : yr.call(n2, t2);
      }, Fr.kebabCase = Kf, Fr.last = Ji, Fr.lastIndexOf = function(t2, r2, e2) {
        var u2 = null == t2 ? 0 : t2.length;
        if (!u2)
          return -1;
        var i2 = u2;
        return e2 !== n && (i2 = (i2 = gf(e2)) < 0 ? br(u2 + i2, 0) : wr(i2, u2 - 1)), r2 == r2 ? function(n2, t3, r3) {
          for (var e3 = r3 + 1; e3--; )
            if (n2[e3] === t3)
              return e3;
          return e3;
        }(t2, r2, i2) : Dt(t2, Nt, i2, true);
      }, Fr.lowerCase = Vf, Fr.lowerFirst = Gf, Fr.lt = hf, Fr.lte = pf, Fr.max = function(t2) {
        return t2 && t2.length ? ge(t2, ia, Ie) : n;
      }, Fr.maxBy = function(t2, r2) {
        return t2 && t2.length ? ge(t2, ci(r2, 2), Ie) : n;
      }, Fr.mean = function(n2) {
        return Pt(n2, ia);
      }, Fr.meanBy = function(n2, t2) {
        return Pt(n2, ci(t2, 2));
      }, Fr.min = function(t2) {
        return t2 && t2.length ? ge(t2, ia, De) : n;
      }, Fr.minBy = function(t2, r2) {
        return t2 && t2.length ? ge(t2, ci(r2, 2), De) : n;
      }, Fr.stubArray = ya, Fr.stubFalse = da, Fr.stubObject = function() {
        return {};
      }, Fr.stubString = function() {
        return "";
      }, Fr.stubTrue = function() {
        return true;
      }, Fr.multiply = Aa, Fr.nth = function(t2, r2) {
        return t2 && t2.length ? qe(t2, gf(r2)) : n;
      }, Fr.noConflict = function() {
        return ht._ === this && (ht._ = Nn2), this;
      }, Fr.noop = la, Fr.now = Io, Fr.pad = function(n2, t2, r2) {
        n2 = wf(n2);
        var e2 = (t2 = gf(t2)) ? lr(n2) : 0;
        if (!t2 || e2 >= t2)
          return n2;
        var u2 = (t2 - e2) / 2;
        return Zu(Tt2(u2), r2) + n2 + Zu(yt2(u2), r2);
      }, Fr.padEnd = function(n2, t2, r2) {
        n2 = wf(n2);
        var e2 = (t2 = gf(t2)) ? lr(n2) : 0;
        return t2 && e2 < t2 ? n2 + Zu(t2 - e2, r2) : n2;
      }, Fr.padStart = function(n2, t2, r2) {
        n2 = wf(n2);
        var e2 = (t2 = gf(t2)) ? lr(n2) : 0;
        return t2 && e2 < t2 ? Zu(t2 - e2, r2) + n2 : n2;
      }, Fr.parseInt = function(n2, t2, r2) {
        return r2 || null == t2 ? t2 = 0 : t2 && (t2 = +t2), xr(wf(n2).replace(rn, ""), t2 || 0);
      }, Fr.random = function(t2, r2, e2) {
        if (e2 && "boolean" != typeof e2 && wi(t2, r2, e2) && (r2 = e2 = n), e2 === n && ("boolean" == typeof r2 ? (e2 = r2, r2 = n) : "boolean" == typeof t2 && (e2 = t2, t2 = n)), t2 === n && r2 === n ? (t2 = 0, r2 = 1) : (t2 = _f(t2), r2 === n ? (r2 = t2, t2 = 0) : r2 = _f(r2)), t2 > r2) {
          var u2 = t2;
          t2 = r2, r2 = u2;
        }
        if (e2 || t2 % 1 || r2 % 1) {
          var i2 = jr();
          return wr(t2 + i2 * (r2 - t2 + at("1e-" + ((i2 + "").length - 1))), r2);
        }
        return He(t2, r2);
      }, Fr.reduce = function(n2, t2, r2) {
        var e2 = Zo(n2) ? Ct : Kt, u2 = arguments.length < 3;
        return e2(n2, ci(t2, 4), r2, u2, pe);
      }, Fr.reduceRight = function(n2, t2, r2) {
        var e2 = Zo(n2) ? Ut : Kt, u2 = arguments.length < 3;
        return e2(n2, ci(t2, 4), r2, u2, ve);
      }, Fr.repeat = function(t2, r2, e2) {
        return r2 = (e2 ? wi(t2, r2, e2) : r2 === n) ? 1 : gf(r2), Je(wf(t2), r2);
      }, Fr.replace = function() {
        var n2 = arguments, t2 = wf(n2[0]);
        return n2.length < 3 ? t2 : t2.replace(n2[1], n2[2]);
      }, Fr.result = function(t2, r2, e2) {
        var u2 = -1, i2 = (r2 = wu(r2, t2)).length;
        for (i2 || (i2 = 1, t2 = n); ++u2 < i2; ) {
          var o2 = null == t2 ? n : t2[Ti(r2[u2])];
          o2 === n && (u2 = i2, o2 = e2), t2 = Qo(o2) ? o2.call(t2) : o2;
        }
        return t2;
      }, Fr.round = ka, Fr.runInContext = en2, Fr.sample = function(n2) {
        return (Zo(n2) ? Qr : Qe)(n2);
      }, Fr.size = function(n2) {
        if (null == n2)
          return 0;
        if (Vo(n2))
          return cf(n2) ? lr(n2) : n2.length;
        var t2 = _i(n2);
        return t2 == m || t2 == O ? n2.size : Te(n2).length;
      }, Fr.snakeCase = Hf, Fr.some = function(t2, r2, e2) {
        var u2 = Zo(t2) ? Bt : iu;
        return e2 && wi(t2, r2, e2) && (r2 = n), u2(t2, ci(r2, 3));
      }, Fr.sortedIndex = function(n2, t2) {
        return ou(n2, t2);
      }, Fr.sortedIndexBy = function(n2, t2, r2) {
        return fu(n2, t2, ci(r2, 2));
      }, Fr.sortedIndexOf = function(n2, t2) {
        var r2 = null == n2 ? 0 : n2.length;
        if (r2) {
          var e2 = ou(n2, t2);
          if (e2 < r2 && Fo(n2[e2], t2))
            return e2;
        }
        return -1;
      }, Fr.sortedLastIndex = function(n2, t2) {
        return ou(n2, t2, true);
      }, Fr.sortedLastIndexBy = function(n2, t2, r2) {
        return fu(n2, t2, ci(r2, 2), true);
      }, Fr.sortedLastIndexOf = function(n2, t2) {
        if (null == n2 ? 0 : n2.length) {
          var r2 = ou(n2, t2, true) - 1;
          if (Fo(n2[r2], t2))
            return r2;
        }
        return -1;
      }, Fr.startCase = Jf, Fr.startsWith = function(n2, t2, r2) {
        return n2 = wf(n2), r2 = null == r2 ? 0 : ae(gf(r2), 0, n2.length), t2 = lu(t2), n2.slice(r2, r2 + t2.length) == t2;
      }, Fr.subtract = Oa, Fr.sum = function(n2) {
        return n2 && n2.length ? Vt(n2, ia) : 0;
      }, Fr.sumBy = function(n2, t2) {
        return n2 && n2.length ? Vt(n2, ci(t2, 2)) : 0;
      }, Fr.template = function(t2, r2, e2) {
        var u2 = Fr.templateSettings;
        e2 && wi(t2, r2, e2) && (r2 = n), t2 = wf(t2), r2 = jf({}, r2, u2, Xu);
        var i2, o2, f2 = jf({}, r2.imports, u2.imports, Xu), a2 = Lf(f2), c2 = Yt(f2, a2), l2 = 0, s2 = r2.interpolate || bn, h2 = "__p += '", p2 = zn2((r2.escape || bn).source + "|" + s2.source + "|" + (s2 === J ? sn : bn).source + "|" + (r2.evaluate || bn).source + "|$", "g"), v2 = "//# sourceURL=" + (Tn2.call(r2, "sourceURL") ? (r2.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ut + "]") + "\n";
        t2.replace(p2, function(n2, r3, e3, u3, f3, a3) {
          return e3 || (e3 = u3), h2 += t2.slice(l2, a3).replace(wn, er), r3 && (i2 = true, h2 += "' +\n__e(" + r3 + ") +\n'"), f3 && (o2 = true, h2 += "';\n" + f3 + ";\n__p += '"), e3 && (h2 += "' +\n((__t = (" + e3 + ")) == null ? '' : __t) +\n'"), l2 = a3 + n2.length, n2;
        }), h2 += "';\n";
        var _2 = Tn2.call(r2, "variable") && r2.variable;
        if (_2) {
          if (cn.test(_2))
            throw new kn2("Invalid `variable` option passed into `_.template`");
        } else
          h2 = "with (obj) {\n" + h2 + "\n}\n";
        h2 = (o2 ? h2.replace(F, "") : h2).replace(N, "$1").replace(P, "$1;"), h2 = "function(" + (_2 || "obj") + ") {\n" + (_2 ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i2 ? ", __e = _.escape" : "") + (o2 ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h2 + "return __p\n}";
        var g2 = na(function() {
          return On2(a2, v2 + "return " + h2).apply(n, c2);
        });
        if (g2.source = h2, Yo(g2))
          throw g2;
        return g2;
      }, Fr.times = function(n2, t2) {
        if ((n2 = gf(n2)) < 1 || n2 > l)
          return [];
        var r2 = h, e2 = wr(n2, h);
        t2 = ci(t2), n2 -= h;
        for (var u2 = Gt(e2, t2); ++r2 < n2; )
          t2(r2);
        return u2;
      }, Fr.toFinite = _f, Fr.toInteger = gf, Fr.toLength = yf, Fr.toLower = function(n2) {
        return wf(n2).toLowerCase();
      }, Fr.toNumber = df, Fr.toSafeInteger = function(n2) {
        return n2 ? ae(gf(n2), -9007199254740991, l) : 0 === n2 ? n2 : 0;
      }, Fr.toString = wf, Fr.toUpper = function(n2) {
        return wf(n2).toUpperCase();
      }, Fr.trim = function(t2, r2, e2) {
        if ((t2 = wf(t2)) && (e2 || r2 === n))
          return Ht(t2);
        if (!t2 || !(r2 = lu(r2)))
          return t2;
        var u2 = sr(t2), i2 = sr(r2);
        return xu(u2, Xt(u2, i2), nr(u2, i2) + 1).join("");
      }, Fr.trimEnd = function(t2, r2, e2) {
        if ((t2 = wf(t2)) && (e2 || r2 === n))
          return t2.slice(0, hr(t2) + 1);
        if (!t2 || !(r2 = lu(r2)))
          return t2;
        var u2 = sr(t2);
        return xu(u2, 0, nr(u2, sr(r2)) + 1).join("");
      }, Fr.trimStart = function(t2, r2, e2) {
        if ((t2 = wf(t2)) && (e2 || r2 === n))
          return t2.replace(rn, "");
        if (!t2 || !(r2 = lu(r2)))
          return t2;
        var u2 = sr(t2);
        return xu(u2, Xt(u2, sr(r2))).join("");
      }, Fr.truncate = function(t2, r2) {
        var e2 = 30, u2 = "...";
        if (tf(r2)) {
          var i2 = "separator" in r2 ? r2.separator : i2;
          e2 = "length" in r2 ? gf(r2.length) : e2, u2 = "omission" in r2 ? lu(r2.omission) : u2;
        }
        var o2 = (t2 = wf(t2)).length;
        if (ur(t2)) {
          var f2 = sr(t2);
          o2 = f2.length;
        }
        if (e2 >= o2)
          return t2;
        var a2 = e2 - lr(u2);
        if (a2 < 1)
          return u2;
        var c2 = f2 ? xu(f2, 0, a2).join("") : t2.slice(0, a2);
        if (i2 === n)
          return c2 + u2;
        if (f2 && (a2 += c2.length - a2), ff(i2)) {
          if (t2.slice(a2).search(i2)) {
            var l2, s2 = c2;
            for (i2.global || (i2 = zn2(i2.source, wf(hn.exec(i2)) + "g")), i2.lastIndex = 0; l2 = i2.exec(s2); )
              var h2 = l2.index;
            c2 = c2.slice(0, h2 === n ? a2 : h2);
          }
        } else if (t2.indexOf(lu(i2), a2) != a2) {
          var p2 = c2.lastIndexOf(i2);
          p2 > -1 && (c2 = c2.slice(0, p2));
        }
        return c2 + u2;
      }, Fr.unescape = function(n2) {
        return (n2 = wf(n2)) && K.test(n2) ? n2.replace(q, pr) : n2;
      }, Fr.uniqueId = function(n2) {
        var t2 = ++$n2;
        return wf(n2) + t2;
      }, Fr.upperCase = Yf, Fr.upperFirst = Qf, Fr.each = bo, Fr.eachRight = wo, Fr.first = Ki, ca(Fr, (ja = {}, me(Fr, function(n2, t2) {
        Tn2.call(Fr.prototype, t2) || (ja[t2] = n2);
      }), ja), {
        chain: false
      }), Fr.VERSION = "4.17.21", Ot([
        "bind",
        "bindKey",
        "curry",
        "curryRight",
        "partial",
        "partialRight"
      ], function(n2) {
        Fr[n2].placeholder = Fr;
      }), Ot([
        "drop",
        "take"
      ], function(t2, r2) {
        Zr.prototype[t2] = function(e2) {
          e2 = e2 === n ? 1 : br(gf(e2), 0);
          var u2 = this.__filtered__ && !r2 ? new Zr(this) : this.clone();
          return u2.__filtered__ ? u2.__takeCount__ = wr(e2, u2.__takeCount__) : u2.__views__.push({
            size: wr(e2, h),
            type: t2 + (u2.__dir__ < 0 ? "Right" : "")
          }), u2;
        }, Zr.prototype[t2 + "Right"] = function(n2) {
          return this.reverse()[t2](n2).reverse();
        };
      }), Ot([
        "filter",
        "map",
        "takeWhile"
      ], function(n2, t2) {
        var r2 = t2 + 1, e2 = 1 == r2 || 3 == r2;
        Zr.prototype[n2] = function(n3) {
          var t3 = this.clone();
          return t3.__iteratees__.push({
            iteratee: ci(n3, 3),
            type: r2
          }), t3.__filtered__ = t3.__filtered__ || e2, t3;
        };
      }), Ot([
        "head",
        "last"
      ], function(n2, t2) {
        var r2 = "take" + (t2 ? "Right" : "");
        Zr.prototype[n2] = function() {
          return this[r2](1).value()[0];
        };
      }), Ot([
        "initial",
        "tail"
      ], function(n2, t2) {
        var r2 = "drop" + (t2 ? "" : "Right");
        Zr.prototype[n2] = function() {
          return this.__filtered__ ? new Zr(this) : this[r2](1);
        };
      }), Zr.prototype.compact = function() {
        return this.filter(ia);
      }, Zr.prototype.find = function(n2) {
        return this.filter(n2).head();
      }, Zr.prototype.findLast = function(n2) {
        return this.reverse().find(n2);
      }, Zr.prototype.invokeMap = Ye(function(n2, t2) {
        return "function" == typeof n2 ? new Zr(this) : this.map(function(r2) {
          return Se(r2, n2, t2);
        });
      }), Zr.prototype.reject = function(n2) {
        return this.filter(Bo(ci(n2)));
      }, Zr.prototype.slice = function(t2, r2) {
        t2 = gf(t2);
        var e2 = this;
        return e2.__filtered__ && (t2 > 0 || r2 < 0) ? new Zr(e2) : (t2 < 0 ? e2 = e2.takeRight(-t2) : t2 && (e2 = e2.drop(t2)), r2 !== n && (e2 = (r2 = gf(r2)) < 0 ? e2.dropRight(-r2) : e2.take(r2 - t2)), e2);
      }, Zr.prototype.takeRightWhile = function(n2) {
        return this.reverse().takeWhile(n2).reverse();
      }, Zr.prototype.toArray = function() {
        return this.take(h);
      }, me(Zr.prototype, function(t2, r2) {
        var e2 = /^(?:filter|find|map|reject)|While$/.test(r2), u2 = /^(?:head|last)$/.test(r2), i2 = Fr[u2 ? "take" + ("last" == r2 ? "Right" : "") : r2], o2 = u2 || /^find/.test(r2);
        i2 && (Fr.prototype[r2] = function() {
          var r3 = this.__wrapped__, f2 = u2 ? [
            1
          ] : arguments, a2 = r3 instanceof Zr, c2 = f2[0], l2 = a2 || Zo(r3), s2 = function(n2) {
            var t3 = i2.apply(Fr, Lt([
              n2
            ], f2));
            return u2 && h2 ? t3[0] : t3;
          };
          l2 && e2 && "function" == typeof c2 && 1 != c2.length && (a2 = l2 = false);
          var h2 = this.__chain__, p2 = !!this.__actions__.length, v2 = o2 && !h2, _2 = a2 && !p2;
          if (!o2 && l2) {
            r3 = _2 ? r3 : new Zr(this);
            var g2 = t2.apply(r3, f2);
            return g2.__actions__.push({
              func: po,
              args: [
                s2
              ],
              thisArg: n
            }), new qr(g2, h2);
          }
          return v2 && _2 ? t2.apply(this, f2) : (g2 = this.thru(s2), v2 ? u2 ? g2.value()[0] : g2.value() : g2);
        });
      }), Ot([
        "pop",
        "push",
        "shift",
        "sort",
        "splice",
        "unshift"
      ], function(n2) {
        var t2 = Wn2[n2], r2 = /^(?:push|sort|unshift)$/.test(n2) ? "tap" : "thru", e2 = /^(?:pop|shift)$/.test(n2);
        Fr.prototype[n2] = function() {
          var n3 = arguments;
          if (e2 && !this.__chain__) {
            var u2 = this.value();
            return t2.apply(Zo(u2) ? u2 : [], n3);
          }
          return this[r2](function(r3) {
            return t2.apply(Zo(r3) ? r3 : [], n3);
          });
        };
      }), me(Zr.prototype, function(n2, t2) {
        var r2 = Fr[t2];
        if (r2) {
          var e2 = r2.name + "";
          Tn2.call(Wr, e2) || (Wr[e2] = []), Wr[e2].push({
            name: t2,
            func: r2
          });
        }
      }), Wr[Fu(n, 2).name] = [
        {
          name: "wrapper",
          func: n
        }
      ], Zr.prototype.clone = function() {
        var n2 = new Zr(this.__wrapped__);
        return n2.__actions__ = Eu(this.__actions__), n2.__dir__ = this.__dir__, n2.__filtered__ = this.__filtered__, n2.__iteratees__ = Eu(this.__iteratees__), n2.__takeCount__ = this.__takeCount__, n2.__views__ = Eu(this.__views__), n2;
      }, Zr.prototype.reverse = function() {
        if (this.__filtered__) {
          var n2 = new Zr(this);
          n2.__dir__ = -1, n2.__filtered__ = true;
        } else
          (n2 = this.clone()).__dir__ *= -1;
        return n2;
      }, Zr.prototype.value = function() {
        var n2 = this.__wrapped__.value(), t2 = this.__dir__, r2 = Zo(n2), e2 = t2 < 0, u2 = r2 ? n2.length : 0, i2 = function(n3, t3, r3) {
          var e3 = -1, u3 = r3.length;
          for (; ++e3 < u3; ) {
            var i3 = r3[e3], o3 = i3.size;
            switch (i3.type) {
              case "drop":
                n3 += o3;
                break;
              case "dropRight":
                t3 -= o3;
                break;
              case "take":
                t3 = wr(t3, n3 + o3);
                break;
              case "takeRight":
                n3 = br(n3, t3 - o3);
            }
          }
          return {
            start: n3,
            end: t3
          };
        }(0, u2, this.__views__), o2 = i2.start, f2 = i2.end, a2 = f2 - o2, c2 = e2 ? f2 : o2 - 1, l2 = this.__iteratees__, s2 = l2.length, h2 = 0, p2 = wr(a2, this.__takeCount__);
        if (!r2 || !e2 && u2 == a2 && p2 == a2)
          return _u(n2, this.__actions__);
        var v2 = [];
        n:
          for (; a2-- && h2 < p2; ) {
            for (var _2 = -1, g2 = n2[c2 += t2]; ++_2 < s2; ) {
              var y2 = l2[_2], d2 = y2.iteratee, b2 = y2.type, w2 = d2(g2);
              if (2 == b2)
                g2 = w2;
              else if (!w2) {
                if (1 == b2)
                  continue n;
                break n;
              }
            }
            v2[h2++] = g2;
          }
        return v2;
      }, Fr.prototype.at = vo, Fr.prototype.chain = function() {
        return ho(this);
      }, Fr.prototype.commit = function() {
        return new qr(this.value(), this.__chain__);
      }, Fr.prototype.next = function() {
        this.__values__ === n && (this.__values__ = vf(this.value()));
        var t2 = this.__index__ >= this.__values__.length;
        return {
          done: t2,
          value: t2 ? n : this.__values__[this.__index__++]
        };
      }, Fr.prototype.plant = function(t2) {
        for (var r2, e2 = this; e2 instanceof Pr; ) {
          var u2 = Di(e2);
          u2.__index__ = 0, u2.__values__ = n, r2 ? i2.__wrapped__ = u2 : r2 = u2;
          var i2 = u2;
          e2 = e2.__wrapped__;
        }
        return i2.__wrapped__ = t2, r2;
      }, Fr.prototype.reverse = function() {
        var t2 = this.__wrapped__;
        if (t2 instanceof Zr) {
          var r2 = t2;
          return this.__actions__.length && (r2 = new Zr(this)), (r2 = r2.reverse()).__actions__.push({
            func: po,
            args: [
              no
            ],
            thisArg: n
          }), new qr(r2, this.__chain__);
        }
        return this.thru(no);
      }, Fr.prototype.toJSON = Fr.prototype.valueOf = Fr.prototype.value = function() {
        return _u(this.__wrapped__, this.__actions__);
      }, Fr.prototype.first = Fr.prototype.head, ft2 && (Fr.prototype[ft2] = function() {
        return this;
      }), Fr;
    }();
    vt ? ((vt.exports = vr)._ = vr, pt._ = vr) : ht._ = vr;
  }).call(commonjsGlobal);
})(lodash, lodash.exports);
var lodashExports = lodash.exports;const style = {
  nothingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  nothingText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    color: ui.semanticColors.TEXT_MUTED,
    fontFamily: common.constants.Fonts.PRIMARY_NORMAL
  },
  container: {
    flex: 1
  },
  pageSwitcher: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: ui.semanticColors.BACKGROUND_SECONDARY,
    borderTopWidth: 1,
    borderTopColor: ui.semanticColors.BACKGROUND_MODIFIER_ACCENT,
    borderBottomWidth: 18,
    borderBottomColor: ui.semanticColors.BACKGROUND_SECONDARY
  },
  switcherImage: {
    width: 24,
    height: 24,
    tintColor: ui.semanticColors.TEXT_NORMAL
  },
  switcherText: {
    fontSize: 14.5,
    color: ui.semanticColors.TEXT_NORMAL,
    fontFamily: common.constants.Fonts.PRIMARY_MEDIUM
  },
  messageContainer: {
    //backgroundColor: semanticColors.CHAT_BACKGROUND,
    padding: 10,
    marginBottom: 6.5,
    flexDirection: "row"
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  iconImg: {
    width: 40 / 1.5,
    height: 40 / 1.5,
    //borderRadius: 20,
    marginRight: 10,
    tintColor: ui.semanticColors.TEXT_MUTED
  },
  textContainer: {
    flex: 1
  },
  nameHeader: {
    flexDirection: "row",
    alignItems: "center"
  },
  authorName: {
    fontSize: 16.5,
    color: ui.semanticColors.HEADER_PRIMARY,
    fontFamily: common.constants.Fonts.PRIMARY_SEMIBOLD
  },
  messageContent: {
    //fontSize: 14,
    color: ui.semanticColors.TEXT_NORMAL,
    fontFamily: common.constants.Fonts.PRIMARY_MEDIUM
  },
  fullUsername: {
    fontSize: 12,
    color: ui.semanticColors.TEXT_MUTED,
    fontFamily: common.constants.Fonts.PRIMARY_MEDIUM
  },
  editedTag: {
    color: ui.semanticColors.TEXT_MUTED,
    fontFamily: common.constants.Fonts.PRIMARY_NORMAL,
    fontSize: 10,
    marginLeft: 5
  },
  timestamp: {
    fontSize: 11,
    color: ui.semanticColors.TEXT_MUTED,
    fontFamily: common.constants.Fonts.PRIMARY_NORMAL,
    marginLeft: 5
  },
  headerStyleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: ui.semanticColors.HEADER_PRIMARY
  },
  cardStyleIcon: {
    width: 22,
    height: 22,
    marginLeft: 5,
    tintColor: ui.semanticColors.INTERACTIVE_NORMAL
  },
  destructiveIcon: {
    tintColor: ui.semanticColors.TEXT_DANGER
  },
  botTag: {
    backgroundColor: "#5865F2",
    borderRadius: 2,
    paddingHorizontal: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  botTagText: {
    fontSize: 9,
    color: ui.semanticColors.TEXT_NORMAL,
    fontFamily: common.constants.Fonts.PRIMARY_SEMIBOLD
  },
  buttonContainer: {
    marginBottom: 2,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: ui.semanticColors.BACKGROUND_ACCENT,
    alignItems: "center"
  },
  buttonText: {
    color: ui.semanticColors.TEXT_NORMAL,
    fontSize: 14,
    fontFamily: common.constants.Fonts.PRIMARY_SEMIBOLD
  },
  buttonTextDanger: {
    color: ui.semanticColors.TEXT_DANGER,
    fontSize: 14,
    fontFamily: common.constants.Fonts.PRIMARY_SEMIBOLD
  },
  buttonContainerDanger: {
    marginBottom: 2,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: ui.semanticColors.TEXT_DANGER,
    alignItems: "center"
  },
  buttonContainerBrand: {
    marginBottom: 2,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#5865F2",
    backgroundColor: "#5865F2",
    alignItems: "center"
  },
  buttonTextBrand: {
    color: "white",
    fontSize: 14,
    fontFamily: common.constants.Fonts.PRIMARY_SEMIBOLD
  },
  buttonContainerRed: {
    marginBottom: 2,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#F23F43",
    backgroundColor: "#F23F43",
    alignItems: "center"
  }
};
const styles = common.stylesheet.createThemedStyleSheet(style);const { ScrollView: ScrollView$4, FlatList: FlatList$3, View: View$5, Text: Text$5, TouchableOpacity: TouchableOpacity$4, TextInput: TextInput$4, Image: Image$4, Modal: Modal$4 } = components.General;
const { useState: useState$1, useRef: useRef$1, useEffect: useEffect$1 } = common.React;
function FallbackImage(param) {
  let { source, fallbackSource, ...props } = param;
  const [imageSource, setImageSource] = useState$1(source);
  const handleImageError = function() {
    if (fallbackSource) {
      setImageSource(fallbackSource);
    }
  };
  return /* @__PURE__ */ common.React.createElement(Image$4, {
    source: imageSource,
    onError: handleImageError,
    ...props
  });
}const { ScrollView: ScrollView$3, FlatList: FlatList$2, View: View$4, Text: Text$4, TouchableOpacity: TouchableOpacity$3, TextInput: TextInput$3, Image: Image$3, Modal: Modal$3 } = components.General;
metro.findByProps("showSimpleActionSheet");
metro.findByProps("pushModal");
const ThemeStore$2 = metro.findByStoreName("ThemeStore");
const EmojiTextView = function(param) {
  let { children, ...props } = param;
  try {
    const customEmojiRegex = /<:[a-zA-Z0-9_]+:(\d+)>/g;
    const renderCustomEmojis = function(text) {
      const parts = text.split(customEmojiRegex);
      return parts.map(function(part, index) {
        if (index % 2 === 1 && /^\d+$/.test(part)) {
          const snowflake = part;
          const uri = `https://cdn.discordapp.com/emojis/${snowflake}.png`;
          return /* @__PURE__ */ common.React.createElement(Image$3, {
            key: index,
            source: {
              uri
            },
            style: {
              width: 15.5,
              height: 15.5
            }
          });
        }
        return /* @__PURE__ */ common.React.createElement(Text$4, {
          key: index
        }, part);
      });
    };
    return /* @__PURE__ */ common.React.createElement(Text$4, props, renderCustomEmojis(children));
  } catch (error) {
    return /* @__PURE__ */ common.React.createElement(Text$4, props, children);
  }
};
function editedOpacity(inputString, textStyle) {
  const regex = /^(.*)(［ EDITED at \d{2}:\d{2}:\d{2} ］)(.*)$/s;
  const match = inputString.match(regex);
  const txtClr = ThemeStore$2.theme === "darker" || ThemeStore$2.theme === "amoled" || ThemeStore$2.theme === "dark" ? "#DADEE18D" : "#3233378D";
  if (match) {
    return /* @__PURE__ */ common.React.createElement(EmojiTextView, {
      style: styles.messageContent
    }, /* @__PURE__ */ common.React.createElement(EmojiTextView, {
      style: {
        ...styles.messageContent,
        color: txtClr
      }
    }, match[1], match[2]), /* @__PURE__ */ common.React.createElement(EmojiTextView, {
      style: {
        ...styles.messageContent,
        ...textStyle
      }
    }, match[3]));
  }
  return /* @__PURE__ */ common.React.createElement(EmojiTextView, {
    style: {
      ...styles.messageContent,
      ...textStyle
    }
  }, inputString);
}
function Chat(param) {
  let { message, onPress, onLongPress, gutterColour, backgroundColour, textColour, thisMessageWasDeletedText, deletedIcon, dontShowTag } = param;
  let embedString = "";
  const gutterStyle = gutterColour ? {
    borderLeftWidth: 1.5,
    borderLeftColor: gutterColour
  } : {};
  const backgroundStyle = backgroundColour ? {
    backgroundColor: backgroundColour
  } : {};
  const textStyle = textColour ? {
    color: textColour
  } : {};
  try {
    embedString = stripMarkdown(embedToText(message?.embeds))?.replace(/\n{3}/g, "\n\n");
  } catch (error) {
  }
  const markdownAhh = (stripMarkdown(message?.content) + (message.attachments.length > 0 ? "\n" + message.attachments.map(function(item) {
    return typeof item === "string" ? item : item.url;
  }).join("\n\n") : "") + embedString).replace(/^\n+/, "").replace(/\n+$/, "");
  const formattedTimestamp = " " + formatTimestamp(message.timestamp);
  return /* @__PURE__ */ common.React.createElement(TouchableOpacity$3, {
    onPress: function() {
      return onPress(markdownAhh, embedString);
    },
    onLongPress: function() {
      return onLongPress(markdownAhh, embedString);
    }
  }, /* @__PURE__ */ common.React.createElement(View$4, {
    style: {
      ...styles.messageContainer,
      ...gutterStyle,
      ...backgroundStyle
    }
  }, /* @__PURE__ */ common.React.createElement(FallbackImage, {
    source: {
      uri: `${getAvatar(message.author)}`
    },
    fallbackSource: {
      uri: "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    style: styles.avatar
  }), /* @__PURE__ */ common.React.createElement(View$4, {
    style: styles.textContainer
  }, /* @__PURE__ */ common.React.createElement(View$4, {
    style: styles.nameHeader
  }, /* @__PURE__ */ common.React.createElement(Text$4, {
    style: styles.authorName
  }, (message.author.globalName || message.author.username) + (message.author.bot ? " " : ""), message.author.bot && /* @__PURE__ */ common.React.createElement(View$4, {
    style: styles.botTag
  }, message.author.verified ? /* @__PURE__ */ common.React.createElement(Text$4, {
    style: styles.botTagText
  }, "\u2713 BOT") : /* @__PURE__ */ common.React.createElement(Text$4, {
    style: styles.botTagText
  }, "BOT")), formattedTimestamp && /* @__PURE__ */ common.React.createElement(Text$4, {
    style: styles.timestamp
  }, " ", formattedTimestamp))), /* @__PURE__ */ common.React.createElement(Text$4, {
    style: {
      ...styles.messageContent,
      ...textStyle
    }
  }, editedOpacity(markdownAhh, textStyle), !dontShowTag && /* @__PURE__ */ common.React.createElement(common.React.Fragment, null, message.notdeleted ? /* @__PURE__ */ common.React.createElement(Text$4, {
    style: styles.editedTag
  }, " (edited)") : !message.edited ? /* @__PURE__ */ common.React.createElement(Text$4, {
    style: styles.editedTag
  }, " (deleted)") : /* @__PURE__ */ common.React.createElement(Text$4, {
    style: styles.editedTag
  }, " (edited, deleted)"))), thisMessageWasDeletedText && /* @__PURE__ */ common.React.createElement(View$4, {
    style: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5
    }
  }, /* @__PURE__ */ common.React.createElement(Image$3, {
    source: {
      uri: deletedIcon
    },
    style: {
      width: 15.5,
      height: 15.5,
      marginRight: 3.5,
      tintColor: "#F7797D"
    }
  }), /* @__PURE__ */ common.React.createElement(Text$4, {
    style: {
      fontSize: 9.5,
      color: ThemeStore$2.theme === "darker" || ThemeStore$2.theme === "amoled" || ThemeStore$2.theme === "dark" ? "#949BA4" : "#5B5E65",
      fontFamily: common.constants.Fonts.PRIMARY_NORMAL
    }
  }, thisMessageWasDeletedText)))));
}const { ScrollView: ScrollView$2, FlatList: FlatList$1, View: View$3, Text: Text$3, TouchableOpacity: TouchableOpacity$2, TextInput: TextInput$2, Image: Image$2, Modal: Modal$2 } = components.General;
metro.findByProps("showSimpleActionSheet");
metro.findByProps("pushModal");
function User(param) {
  let { author, mode, onPress } = param;
  return /* @__PURE__ */ common.React.createElement(TouchableOpacity$2, {
    onPress: function() {
      return onPress(author);
    }
  }, /* @__PURE__ */ common.React.createElement(View$3, {
    style: styles.messageContainer
  }, /* @__PURE__ */ common.React.createElement(Image$2, {
    source: mode == "user" ? !author.startsWith("@") ? assets.getAssetIDByName("ic_copy_id") : assets.getAssetIDByName("ic_mention_user") : mode == "guild" ? assets.getAssetIDByName("ic_globe_24px") : mode == "channel" ? assets.getAssetIDByName("ic_text_channel_16px") : assets.getAssetIDByName("ic_chat"),
    style: styles.iconImg
  }), /* @__PURE__ */ common.React.createElement(View$3, {
    style: styles.textContainer
  }, /* @__PURE__ */ common.React.createElement(Text$3, {
    style: styles.authorName
  }, author.replace("@", "")), /* @__PURE__ */ common.React.createElement(Text$3, {
    style: styles.fullUsername
  }, mode == "user" ? !author.startsWith("@") ? "author id" : "username" : mode == "guild" ? "guild id" : mode == "channel" ? "channel id" : "keyword"))));
}const { View: View$2, Text: Text$2, TextInput: TextInput$1, TouchableOpacity: TouchableOpacity$1 } = components.General;
const { FormIcon: FormIcon$1 } = components.Forms;
const { ScrollView: ScrollView$1, Image: Image$1, Modal: Modal$1 } = common.ReactNative;
const modals$1 = metro.findByProps("pushModal");
const ThemeStore$1 = metro.findByStoreName("ThemeStore");
const { meta: { resolveSemanticColor: resolveSemanticColor$1 } } = metro.findByProps("colors", "meta");
const Navigator = metro.findByName("Navigator") ?? metro.findByProps("Navigator")?.Navigator;
const closeButton = metro.findByProps("getRenderCloseButton")?.getRenderCloseButton ?? metro.findByProps("getHeaderCloseButton")?.getHeaderCloseButton;
const Svg = metro.findByName("Svg", false).default;
const Path = metro.findByName("Svg", false).Path;
const SafeArea = metro.findByProps("useSafeAreaInsets");
function button(onPress, onLongPress) {
  return function() {
    return /* @__PURE__ */ common.React.createElement(TouchableOpacity$1, {
      onPress,
      onLongPress
    }, /* @__PURE__ */ common.React.createElement(FormIcon$1, {
      source: assets.getAssetIDByName("ic_edit_24px"),
      style: {
        marginRight: 8,
        marginLeft: -8,
        opacity: 1
      }
    }));
  };
}
function createEditModal() {
  let filename = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "unknown", data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "dummy", subtitle = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "dummy", onPress = arguments.length > 3 ? arguments[3] : void 0, canEdit = arguments.length > 4 ? arguments[4] : void 0;
  return function() {
    const [wordWrap, setWordWrap] = common.React.useState(true);
    const [textStore, setText] = common.React.useState(`${data}`);
    const Colors = {
      header: resolveSemanticColor$1(ThemeStore$1.theme, ui.semanticColors.HEADER_PRIMARY),
      test: resolveSemanticColor$1(ThemeStore$1.theme, ui.semanticColors.TEXT_MUTED),
      bgDark: resolveSemanticColor$1(ThemeStore$1.theme, ui.semanticColors.BACKGROUND_SECONDARY_ALT),
      bgBright: resolveSemanticColor$1(ThemeStore$1.theme, ui.semanticColors.BACKGROUND_SECONDARY),
      bgBrighter: resolveSemanticColor$1(ThemeStore$1.theme, ui.semanticColors.BACKGROUND_ACCENT)
    };
    const wordWrapSvg = /* @__PURE__ */ common.React.createElement(Svg, {
      height: "24",
      width: "24",
      viewBox: "0 0 24 24",
      fill: wordWrap ? Colors.header : Colors.test
    }, /* @__PURE__ */ common.React.createElement(Path, {
      d: "M2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H21.25C21.6642 6.5 22 6.16421 22 5.75C22 5.33579 21.6642 5 21.25 5H2.75Z"
    }), /* @__PURE__ */ common.React.createElement(Path, {
      d: "M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H19C20.3807 13 21.5 14.1193 21.5 15.5C21.5 16.8807 20.3807 18 19 18H14.5607L15.2803 17.2803C15.5732 16.9874 15.5732 16.5126 15.2803 16.2197C14.9874 15.9268 14.5126 15.9268 14.2197 16.2197L12.2197 18.2197C11.9268 18.5126 11.9268 18.9874 12.2197 19.2803L14.2197 21.2803C14.5126 21.5732 14.9874 21.5732 15.2803 21.2803C15.5732 20.9874 15.5732 20.5126 15.2803 20.2197L14.5607 19.5H19C21.2091 19.5 23 17.7091 23 15.5C23 13.2909 21.2091 11.5 19 11.5H2.75Z"
    }), /* @__PURE__ */ common.React.createElement(Path, {
      d: "M2 18.75C2 18.3358 2.33579 18 2.75 18H9.25C9.66421 18 10 18.3358 10 18.75C10 19.1642 9.66421 19.5 9.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75Z"
    }));
    const [isOverlayVisible, setIsOverlayVisible] = common.React.useState(false);
    const scrollViewRef = common.React.useRef(null);
    const insets = SafeArea.useSafeAreaInsets();
    let loaded = /* @__PURE__ */ common.React.createElement(View$2, {
      style: {
        marginTop: 0
      }
    }, /* @__PURE__ */ common.React.createElement(View$2, {
      style: {
        padding: 15,
        paddingBottom: 0,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between"
      }
    }, /* @__PURE__ */ common.React.createElement(View$2, {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: 8
      }
    }, /* @__PURE__ */ common.React.createElement(TouchableOpacity$1, {
      onPress: function() {
        setWordWrap(!wordWrap);
      },
      onLongPress: function() {
        toasts.showToast("Toggle Word Wrap", assets.getAssetIDByName("ic_information_filled_24px"));
      },
      style: {
        backgroundColor: wordWrap ? Colors.bgBrighter : Colors.bgDark,
        padding: 4,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: wordWrap ? Colors.bgBright : Colors.bgDark
      }
    }, wordWrapSvg), /* @__PURE__ */ common.React.createElement(TouchableOpacity$1, {
      onPress: function() {
        setIsOverlayVisible(true);
      },
      onLongPress: function() {
        toasts.showToast(common.i18n.Messages.JUMP, assets.getAssetIDByName("ic_information_filled_24px"));
      },
      style: {
        marginLeft: 10,
        backgroundColor: Colors.bgDark,
        padding: 4,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: Colors.bgDark
      }
    }, /* @__PURE__ */ common.React.createElement(Image$1, {
      source: assets.getAssetIDByName("ic_reply_24px"),
      style: {
        height: 24,
        width: 24,
        transform: [
          {
            scaleX: -1
          },
          {
            rotate: "-90deg"
          }
        ]
      }
    })))), /* @__PURE__ */ common.React.createElement(ScrollView$1, {
      ref: scrollViewRef,
      style: {
        margin: 15,
        marginBottom: 50 + insets.bottom
      }
    }, /* @__PURE__ */ common.React.createElement(ScrollView$1, {
      horizontal: !wordWrap
    }, /* @__PURE__ */ common.React.createElement(View$2, {
      style: {
        flexDirection: "row"
      }
    }, /* @__PURE__ */ common.React.createElement(View$2, {
      style: {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: Colors.bgDark,
        marginRight: 5,
        paddingRight: 2,
        paddingLeft: 2,
        alignSelf: "flex-start"
      }
    }), /* @__PURE__ */ common.React.createElement(TextInput$1, {
      multiline: true,
      selectable: true,
      editable: canEdit,
      style: [
        {
          color: Colors.header,
          lineHeight: 20,
          flex: 1
        }
      ],
      onChangeText: function(text) {
        setText(`${text}`);
      }
    }, textStore)))), /* @__PURE__ */ common.React.createElement(Modal$1, {
      transparent: true,
      animationType: "none",
      visible: isOverlayVisible,
      onRequestClose: function() {
        return setIsOverlayVisible(false);
      }
    }, /* @__PURE__ */ common.React.createElement(View$2, {
      style: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
        // Semi-transparent background color
      }
    }, /* @__PURE__ */ common.React.createElement(View$2, {
      style: {
        backgroundColor: Colors.bgBright,
        padding: 20,
        borderRadius: 10,
        width: "90%"
      }
    }, /* @__PURE__ */ common.React.createElement(View$2, {
      style: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
      }
    }, /* @__PURE__ */ common.React.createElement(components.Forms.FormText, {
      style: {
        fontSize: 20,
        fontFamily: common.constants.Fonts.PRIMARY_BOLD
      }
    }, common.i18n.Messages.JUMP), /* @__PURE__ */ common.React.createElement(TouchableOpacity$1, {
      onPress: function() {
        return setIsOverlayVisible(false);
      }
    }, /* @__PURE__ */ common.React.createElement(FormIcon$1, {
      source: assets.getAssetIDByName("ic_close_16px"),
      style: {
        opacity: 1
      }
    }))), /* @__PURE__ */ common.React.createElement(TouchableOpacity$1, {
      style: {
        backgroundColor: Colors.bgDark,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      onPress: function() {
        let scrollView = scrollViewRef?.current;
        setIsOverlayVisible(false);
        scrollView?.scrollToEnd?.({
          animated: true
        });
      }
    }, /* @__PURE__ */ common.React.createElement(FormIcon$1, {
      source: assets.getAssetIDByName("ic_jump_to_bottom_24px"),
      style: {
        opacity: 1
      }
    }), /* @__PURE__ */ common.React.createElement(components.Forms.FormText, {
      style: {
        color: Colors.test,
        fontSize: 16,
        fontFamily: common.constants.Fonts.PRIMARY_BOLD,
        textTransform: "uppercase"
      }
    }, "Jump to the bottom"), /* @__PURE__ */ common.React.createElement(View$2, null)), /* @__PURE__ */ common.React.createElement(TouchableOpacity$1, {
      style: {
        backgroundColor: Colors.bgDark,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      onPress: function() {
        let scrollView = scrollViewRef?.current;
        setIsOverlayVisible(false);
        scrollView?.scrollTo?.({
          y: 0,
          animated: true
        });
      }
    }, /* @__PURE__ */ common.React.createElement(FormIcon$1, {
      source: assets.getAssetIDByName("ic_jump_to_bottom_24px"),
      style: {
        opacity: 1,
        transform: [
          {
            scaleY: -1
          }
        ]
      }
    }), /* @__PURE__ */ common.React.createElement(components.Forms.FormText, {
      style: {
        color: Colors.test,
        fontSize: 16,
        fontFamily: common.constants.Fonts.PRIMARY_BOLD,
        textTransform: "uppercase"
      }
    }, "Jump to the top"), /* @__PURE__ */ common.React.createElement(View$2, null))))));
    return /* @__PURE__ */ common.React.createElement(Navigator, {
      initialRouteName: "FILE_CONTENT_PREVIEW",
      screens: {
        FILE_CONTENT_PREVIEW: {
          headerLeft: closeButton(function() {
            return modals$1.popModal("file-content-preview");
          }),
          headerRight: button(function() {
            return onPress(`${textStore}`);
          }),
          render: function() {
            return loaded;
          },
          headerTitle: function() {
            let headerColor = resolveSemanticColor$1(ThemeStore$1.theme, ui.semanticColors.HEADER_PRIMARY);
            return /* @__PURE__ */ common.React.createElement(TouchableOpacity$1, {
              onPress: function() {
                common.clipboard.setString(filename);
                toasts.showToast(common.i18n.Messages.COPIED_TEXT, assets.getAssetIDByName("toast_copy_message"));
              }
            }, /* @__PURE__ */ common.React.createElement(View$2, {
              style: {
                alignSelf: "flex-start",
                maxWidth: "80%",
                minWidth: "80%"
              }
            }, /* @__PURE__ */ common.React.createElement(Text$2, {
              ellipsizeMode: "tail",
              numberOfLines: 1,
              style: {
                color: headerColor,
                textAlign: "left"
              }
            }, filename)), /* @__PURE__ */ common.React.createElement(View$2, {
              style: {
                alignSelf: "flex-start"
              }
            }, /* @__PURE__ */ common.React.createElement(Text$2, {
              ellipsizeMode: "tail",
              style: {
                color: headerColor,
                fontSize: 12,
                textAlign: "left"
              }
            }, subtitle)));
          }
        }
      }
    });
  };
}function logStuff$1(stuff) {
}
const { ScrollView, FlatList, View: View$1, Text: Text$1, TouchableOpacity, TextInput, Image, Modal } = components.General;
const { FormDivider, FormIcon, FormSwitchRow, FormCheckboxRow, FormInput, FormSection, FormRow: FormRow$1 } = components.Forms;
const { useState, useRef, useEffect } = common.React;
metro.findByStoreName("SortedGuildStore");
const UserStore = metro.findByStoreName("UserStore");
const modals = metro.findByProps("pushModal");
const { showSimpleActionSheet } = metro.findByProps("showSimpleActionSheet");
const { hideActionSheet } = metro.findByProps("openLazy", "hideActionSheet");
const CustomColorPickerActionSheet = metro.findByName("CustomColorPickerActionSheet");
function openSheet(sheet, props) {
  const { openLazy, hideActionSheet: hideActionSheet2 } = vendetta.metro.findByProps("openLazy", "hideActionSheet");
  try {
    openLazy(new Promise(function(call) {
      return call({
        default: sheet
      });
    }), "ActionSheet", props);
  } catch (error) {
  }
}
function hexToNumber(hex) {
  hex = hex.substring(1);
  return parseInt(hex, 16);
}
function numberToHex(integer) {
  const hex = integer.toString(16);
  return "#" + hex;
}
function isBase64Image(base64) {
  if (base64.trim() == "")
    return true;
  const base64RegexPNG = /^data:image\/png;base64,/;
  const base64RegexJPG = /^data:image\/jpeg;base64,|^data:image\/jpg;base64/;
  return base64RegexPNG.test(base64) || base64RegexJPG.test(base64);
}
function showColour(colourArg, colourArg1, colourArg2, textArg, text0Arg, text1Arg) {
  let textStoreTimeout;
  let textStore0Timeout;
  let textStore1Timeout;
  let colourStore = colourArg || plugin.storage.textColour;
  let colourStore1 = colourArg1 || plugin.storage.backgroundColour;
  let colourStore2 = colourArg2 || plugin.storage.gutterColour;
  let textStore = textArg || plugin.storage.deletedText;
  let textStore0 = text0Arg || plugin.storage.backgroundAlpha;
  let textStore1 = text1Arg || plugin.storage.baseIcon;
  alerts.showConfirmationAlert({
    title: "Customise Deleted Message Visuals",
    confirmText: "Save",
    onConfirm: function() {
      try {
        if (isBase64Image(textStore1)) {
          if (textStore0 && /^(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})$/.test(`${textStore0}`)) {
            if (!textStore || textStore.trim() == "")
              textStore = "This message was deleted at %t";
            textStore = textStore.trim();
            plugin.storage.textColour = colourStore;
            plugin.storage.backgroundColour = colourStore1;
            plugin.storage.gutterColour = colourStore2;
            plugin.storage.deletedText = textStore;
            plugin.storage.backgroundAlpha = textStore0;
            plugin.storage.baseIcon = textStore1;
            showColour();
          } else {
            showColour(colourStore, colourStore1, colourStore2, textStore, textStore0, textStore1);
            toasts.showToast("Opacity must be from 0 to 255", assets.getAssetIDByName("ic_warning_24px"));
          }
        } else {
          showColour(colourStore, colourStore1, colourStore2, textStore, textStore0, textStore1);
          toasts.showToast("Invalid Base64 Image", assets.getAssetIDByName("ic_warning_24px"));
        }
      } catch (error) {
      }
    },
    children: /* @__PURE__ */ common.React.createElement(ScrollView, {
      style: {
        marginVertical: 8,
        maxHeight: common.ReactNative.Dimensions.get("window").height / 1.372
      }
    }, /* @__PURE__ */ common.React.createElement(Chat, {
      dontShowTag: true,
      deletedIcon: `${textStore1 || ""}`.trim() != "" ? `${textStore1}` : trashImg,
      thisMessageWasDeletedText: `${textStore}`.replace(/%t/g, `${new Date().toLocaleTimeString("en-US", {
        hour12: false
      }).toString()}`),
      textColour: `${colourStore}`,
      backgroundColour: `${colourStore1}${Math.round(parseFloat(textStore0)).toString(16).padStart(2, "0")}`,
      gutterColour: `${colourStore2}`,
      message: {
        id: "0",
        channel_id: "0",
        author: JSON.parse(JSON.stringify(UserStore.getCurrentUser())),
        attachments: [],
        timestamp: new Date().toISOString(),
        content: [
          "Hewwo :3",
          "Hi~~",
          "UwU",
          "OwO",
          "Wow...",
          "Yippie!",
          "Sure >:3",
          "ehehe >:3",
          "Stop >~<"
        ][Math.floor(Math.random() * 9)],
        guild_id: null,
        dateofaction: "0",
        embeds: [],
        edited: false
      },
      onPress: function() {
        return void 0;
      },
      onLongPress: function() {
        return void 0;
      }
    }), /* @__PURE__ */ common.React.createElement(FormRow$1, {
      label: "Text Colour",
      subLabel: "Click to Update",
      onPress: function() {
        return openSheet(CustomColorPickerActionSheet, {
          color: hexToNumber(colourStore),
          onSelect: function(color) {
            const value = numberToHex(color);
            colourStore = value;
            showColour(colourStore, colourStore1, colourStore2, textStore, textStore0, textStore1);
          }
        });
      },
      trailing: /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
        onPress: function() {
          return openSheet(CustomColorPickerActionSheet, {
            color: hexToNumber(colourStore),
            onSelect: function(color) {
              const value = numberToHex(color);
              colourStore = value;
              showColour(colourStore, colourStore1, colourStore2, textStore, textStore0, textStore1);
            }
          });
        }
      }, /* @__PURE__ */ common.React.createElement(View$1, {
        style: {
          width: 32,
          height: 32,
          borderRadius: 10,
          backgroundColor: `${colourStore}`
        }
      }))
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormRow$1, {
      label: "Background Colour",
      subLabel: "Click to Update",
      onPress: function() {
        return openSheet(CustomColorPickerActionSheet, {
          color: hexToNumber(colourStore1),
          onSelect: function(color) {
            const value = numberToHex(color);
            colourStore1 = value;
            showColour(colourStore, colourStore1, colourStore2, textStore, textStore0, textStore1);
          }
        });
      },
      trailing: /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
        onPress: function() {
          return openSheet(CustomColorPickerActionSheet, {
            color: hexToNumber(colourStore1),
            onSelect: function(color) {
              const value = numberToHex(color);
              colourStore1 = value;
              showColour(colourStore, colourStore1, colourStore2, textStore, textStore0, textStore1);
            }
          });
        }
      }, /* @__PURE__ */ common.React.createElement(View$1, {
        style: {
          width: 32,
          height: 32,
          borderRadius: 10,
          backgroundColor: `${colourStore1}`
        }
      }))
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormRow$1, {
      label: "Gutter Colour",
      subLabel: "Click to Update",
      onPress: function() {
        return openSheet(CustomColorPickerActionSheet, {
          color: hexToNumber(colourStore2),
          onSelect: function(color) {
            const value = numberToHex(color);
            colourStore2 = value;
            showColour(colourStore, colourStore1, colourStore2, textStore, textStore0, textStore1);
          }
        });
      },
      trailing: /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
        onPress: function() {
          return openSheet(CustomColorPickerActionSheet, {
            color: hexToNumber(colourStore2),
            onSelect: function(color) {
              const value = numberToHex(color);
              colourStore2 = value;
              showColour(colourStore, colourStore1, colourStore2, textStore, textStore0, textStore1);
            }
          });
        }
      }, /* @__PURE__ */ common.React.createElement(View$1, {
        style: {
          width: 32,
          height: 32,
          borderRadius: 10,
          backgroundColor: `${colourStore2}`
        }
      }))
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormInput, {
      title: "Background Opacity.",
      placeholder: "0-255",
      value: `${textStore0}`,
      onChange: function(value) {
        clearTimeout(textStore0Timeout);
        textStore0Timeout = setTimeout(function() {
          textStore0 = `${value}`;
          showColour(colourStore, colourStore1, colourStore2, textStore, textStore0, textStore1);
        }, 500);
      },
      keyboardType: "numeric"
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormInput, {
      title: "Deleted message text. %t is replaced with the time.",
      placeholder: "This message was deleted at %t",
      value: `${textStore}`,
      onChange: function(value) {
        clearTimeout(textStoreTimeout);
        textStoreTimeout = setTimeout(function() {
          textStore = `${value}`;
          showColour(colourStore, colourStore1, colourStore2, textStore, textStore0, textStore1);
        }, 500);
      }
    }), /* @__PURE__ */ common.React.createElement(FormInput, {
      title: "Insert a custom base64 image or image URL to be used instead of the trash icon.",
      placeholder: `${trashImg}`,
      value: `${textStore1}`,
      onChange: function(value) {
        clearTimeout(textStore1Timeout);
        textStore1Timeout = setTimeout(function() {
          textStore1 = `${value}`;
          showColour(colourStore, colourStore1, colourStore2, textStore, textStore0, textStore1);
        }, 500);
      }
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: [
        styles.buttonContainerBrand,
        {
          marginBottom: 10
        }
      ],
      onPress: function() {
        return showSettings();
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextBrand
    }, "Back")), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainer,
      onPress: function() {
        plugin.storage.textColour = "#d95547";
        plugin.storage.backgroundColour = "#d95547";
        plugin.storage.gutterColour = "#d95547";
        plugin.storage.deletedText = "This message was deleted at %t";
        plugin.storage.backgroundAlpha = 34;
        plugin.storage.baseIcon = "";
        showColour();
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonText
    }, "Reset to Defaults")))
  });
}
function showSettings() {
  alerts.showConfirmationAlert({
    title: "Settings",
    confirmText: "Close",
    //cancelText: 'Nah',
    //confirmColor: "brand",
    onConfirm: function() {
      return void 0;
    },
    children: /* @__PURE__ */ common.React.createElement(ScrollView, {
      style: {
        marginVertical: 8,
        maxHeight: common.ReactNative.Dimensions.get("window").height / 1.372
      }
    }, /* @__PURE__ */ common.React.createElement(FormSection, {
      title: "Main"
    }, /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "Store Edits",
      subLabel: "Save message edits in storage.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("ic_edit_20px")
      }),
      onValueChange: function(v) {
        plugin.storage.saveEdit = v;
        showSettings();
      },
      value: plugin.storage.saveEdit
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "Store Deletes",
      subLabel: "Save deleted messages in storage.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("ic_trash_filled")
      }),
      onValueChange: function(v) {
        plugin.storage.saveDelete = v;
        showSettings();
      },
      value: plugin.storage.saveDelete
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "Log Edits",
      subLabel: "Show edit history in chat.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("ic_edit_20px")
      }),
      onValueChange: function(v) {
        plugin.storage.logEdit = v;
        showSettings();
      },
      value: plugin.storage.logEdit
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "Log Deletes",
      subLabel: "Show deleted messages in chat.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("ic_trash_filled")
      }),
      onValueChange: function(v) {
        plugin.storage.logDelete = v;
        showSettings();
      },
      value: plugin.storage.logDelete
    })), /* @__PURE__ */ common.React.createElement(FormSection, {
      title: "Preferences"
    }, /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "Only Log Current Channel",
      subLabel: "Don't log messages outside of the channel currently being viewed.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("ic_mute_channel_24px")
      }),
      onValueChange: function(v) {
        plugin.storage.onlyLog = v;
        showSettings();
      },
      value: plugin.storage.onlyLog
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "Only Log Others' Messages",
      subLabel: "Don't log your own messages.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("ic_my_account_24px")
      }),
      onValueChange: function(v) {
        plugin.storage.dontAuthor = v;
        showSettings();
      },
      value: plugin.storage.dontAuthor
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "Ignore bots.",
      subLabel: "Don't log bot messages.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("ic_robot_24px")
      }),
      onValueChange: function(v) {
        plugin.storage.dontBot = v;
        showSettings();
      },
      value: plugin.storage.dontBot
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "Ignore PluralKit",
      subLabel: "Don't log PluralKit messages.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("ic_close_circle_24px")
      }),
      onValueChange: function(v) {
        plugin.storage.dontPK = v;
        showSettings();
      },
      value: plugin.storage.dontPK
    })), /* @__PURE__ */ common.React.createElement(FormSection, {
      title: "Others"
    }, /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "Reaction Toast",
      subLabel: "Show a toast notification when someone reacts to your message.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("ic_add_reaction_v2")
      }),
      onValueChange: function(v) {
        plugin.storage.logReaction = v;
        showSettings();
      },
      value: plugin.storage.logReaction
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "AutoSave Small Media",
      subLabel: "Automatically download deleted attachments under 8mb.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("ic_download_24px")
      }),
      onValueChange: function(v) {
        plugin.storage.autoDownload = v;
        showSettings();
      },
      value: plugin.storage.autoDownload
    })), /* @__PURE__ */ common.React.createElement(FormSection, {
      title: "Further Settings"
    }, /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainer,
      onPress: function() {
        return showColour();
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonText
    }, "Visuals")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainer,
      onPress: function() {
        return showGreylistMenu();
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonText
    }, "Whitelist / Blacklist")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainer,
      onPress: function() {
        return showLimit();
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonText
    }, "Storage Limits")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainerDanger,
      onPress: function() {
        return showPrune();
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextDanger
    }, "Prune Data")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainerDanger,
      onPress: function() {
        return alerts.showConfirmationAlert({
          title: "Clear All Data",
          content: "Are you REALLY sure? This will DELETE EVERYTHING.",
          confirmText: "DELETE EVERYTHING",
          confirmColor: "red",
          onConfirm: function() {
            plugin.storage.deleted = "eJyLjgUAARUAuQ==";
            plugin.storage.edited = "eJyLjgUAARUAuQ==";
            toasts.showToast("Deleted EVERYTHING", assets.getAssetIDByName("ic_trash_24px"));
          }
        });
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextDanger
    }, "Clear All Data")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainerDanger,
      onPress: function() {
        return alerts.showConfirmationAlert({
          title: "Clear All Edited Messages",
          content: "Are you REALLY sure?",
          confirmText: "YES",
          confirmColor: "red",
          onConfirm: function() {
            plugin.storage.edited = "eJyLjgUAARUAuQ==";
            toasts.showToast("Cleared Edited Messages", assets.getAssetIDByName("ic_trash_24px"));
          }
        });
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextDanger
    }, "Clear All Edited Messages")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainerDanger,
      onPress: function() {
        return alerts.showConfirmationAlert({
          title: "Clear All Deleted Messages",
          content: "Are you REALLY sure?",
          confirmText: "YES",
          confirmColor: "red",
          onConfirm: function() {
            plugin.storage.deleted = "eJyLjgUAARUAuQ==";
            toasts.showToast("Cleared Deleted Messages", assets.getAssetIDByName("ic_trash_24px"));
          }
        });
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextDanger
    }, "Clear All Deleted Messages"))))
  });
}
function showList(mode) {
  alerts.showConfirmationAlert({
    title: mode == "user" ? "Users" : mode == "guild" ? "Guilds" : mode == "channel" ? "Channels" : "Keywords",
    confirmText: mode == "user" ? "Add User" : mode == "guild" ? "Add Guild" : mode == "channel" ? "Add Channel" : "Add Keyword",
    onConfirm: function() {
      showAddEntry(mode);
    },
    children: /* @__PURE__ */ common.React.createElement(ScrollView, {
      style: {
        marginVertical: 8,
        maxHeight: common.ReactNative.Dimensions.get("window").height
      }
    }, /* @__PURE__ */ common.React.createElement(FlatList, {
      style: {
        marginVertical: 8,
        maxHeight: common.ReactNative.Dimensions.get("window").height / 1.6
      },
      data: mode == "user" ? plugin.storage.userList : mode == "guild" ? plugin.storage.guildList : mode == "channel" ? plugin.storage.channelList : plugin.storage.wordList,
      renderItem: function(param) {
        let { item } = param;
        return /* @__PURE__ */ common.React.createElement(User, {
          author: item,
          mode,
          onPress: function(content) {
            return showEntryAction(mode, content);
          }
        });
      },
      keyExtractor: function() {
        return Math.random().toString(36).substr(2, 9);
      },
      ListEmptyComponent: function() {
        return /* @__PURE__ */ common.React.createElement(Text$1, {
          style: styles.nothingText
        }, "No entries \xAF\\_(\u30C4)_/\xAF");
      }
    }), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainerBrand,
      onPress: function() {
        return showGreylistMenu();
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextBrand
    }, "Back")))
  });
}
function showPrune(override) {
  let textStore = override || "";
  alerts.showConfirmationAlert({
    title: "Prune Data",
    children: /* @__PURE__ */ common.React.createElement(ScrollView, {
      style: {
        marginVertical: 8,
        maxHeight: common.ReactNative.Dimensions.get("window").height / 1.372
      }
    }, /* @__PURE__ */ common.React.createElement(FormInput, {
      title: "Formatting works similar to Discord search but you filter out the searched messages.",
      placeholder: "from:hmm channel:123456789 oooooo wow",
      value: `${textStore}`,
      onChange: function(value) {
        return textStore = `${value}`;
      }
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: [
        styles.buttonContainerBrand,
        {
          marginBottom: 10
        }
      ],
      onPress: function() {
        return showSettings();
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextBrand
    }, "Back")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainerRed,
      onPress: function() {
        try {
          const bigChungus = filterSearched(new Map(JSON.parse(pako.inflate(Buffer.from(plugin.storage.edited, "base64"), {
            to: "string"
          }))), /* @__PURE__ */ new Map(), `${textStore}`);
          plugin.storage.edited = Buffer.from(pako.deflate(JSON.stringify([
            ...bigChungus.filteredMap1
          ]), {
            to: "string"
          })).toString("base64");
          toasts.showToast("Pruned Edited Logs", assets.getAssetIDByName("ic_trash_24px"));
          showSettings();
        } catch (error) {
          toasts.showToast(`${error}`, assets.getAssetIDByName("ic_trash_24px"));
        }
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextBrand
    }, "Prune Edited Logs")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainerRed,
      onPress: function() {
        try {
          const bigChungus = filterSearched(/* @__PURE__ */ new Map(), new Map(JSON.parse(pako.inflate(Buffer.from(plugin.storage.deleted, "base64"), {
            to: "string"
          }))), `${textStore}`);
          plugin.storage.deleted = Buffer.from(pako.deflate(JSON.stringify([
            ...bigChungus.filteredMap2
          ]), {
            to: "string"
          })).toString("base64");
          toasts.showToast("Pruned Deleted Logs", assets.getAssetIDByName("ic_trash_24px"));
          showSettings();
        } catch (error) {
          toasts.showToast(`${error}`, assets.getAssetIDByName("ic_trash_24px"));
        }
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextBrand
    }, "Prune Deleted Logs"))),
    confirmText: "PRUNE EDITED AND DELETED",
    confirmColor: "red",
    onConfirm: function() {
      try {
        const bigChungus = filterSearched(new Map(JSON.parse(pako.inflate(Buffer.from(plugin.storage.edited, "base64"), {
          to: "string"
        }))), new Map(JSON.parse(pako.inflate(Buffer.from(plugin.storage.deleted, "base64"), {
          to: "string"
        }))), `${textStore}`);
        plugin.storage.edited = Buffer.from(pako.deflate(JSON.stringify([
          ...bigChungus.filteredMap1
        ]), {
          to: "string"
        })).toString("base64");
        plugin.storage.deleted = Buffer.from(pako.deflate(JSON.stringify([
          ...bigChungus.filteredMap2
        ]), {
          to: "string"
        })).toString("base64");
        toasts.showToast("Pruned All Data", assets.getAssetIDByName("ic_trash_24px"));
        showSettings();
      } catch (error) {
      }
    }
  });
}
function showLimit(override, override2) {
  let textStore = override || Math.round(plugin.storage.limit);
  let textStore1 = override2 || Math.round(plugin.storage.charLimit);
  alerts.showConfirmationAlert({
    title: "Storage Limits",
    confirmText: "Save",
    onConfirm: function() {
      try {
        if (!textStore)
          textStore = plugin.storage.limit;
        if (!textStore1)
          textStore1 = plugin.storage.charLimit;
        if (/^\d+$/.test(textStore) && /^\d+$/.test(textStore1)) {
          plugin.storage.limit = Math.round(parseFloat(textStore));
          plugin.storage.charLimit = Math.round(parseFloat(textStore1));
          toasts.showToast("Limits Set", assets.getAssetIDByName("ic_message_edit"));
          showLimit(textStore, textStore1);
        } else {
          showLimit(textStore, textStore1);
          toasts.showToast("Limits Be Positive Numbers", assets.getAssetIDByName("ic_warning_24px"));
        }
      } catch (error) {
      }
    },
    children: /* @__PURE__ */ common.React.createElement(ScrollView, {
      style: {
        marginVertical: 8,
        maxHeight: common.ReactNative.Dimensions.get("window").height / 1.372
      }
    }, /* @__PURE__ */ common.React.createElement(FormInput, {
      title: "Max Saved Messages",
      placeholder: "6900",
      value: `${textStore}`,
      onChange: function(value) {
        return textStore = `${value}`;
      }
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormInput, {
      title: "Max Character Limit for Saved Messages",
      placeholder: "4000",
      value: `${textStore1}`,
      onChange: function(value) {
        return textStore1 = `${value}`;
      }
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainerBrand,
      onPress: function() {
        return showSettings();
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextBrand
    }, "Back")))
  });
}
function showAddEntry(mode, override) {
  let textStore = override || "";
  alerts.showConfirmationAlert({
    title: mode == "user" ? "Add User Entry" : mode == "guild" ? "Add Guild Entry" : "Add Channel Entry",
    confirmText: "Confirm",
    onConfirm: function() {
      try {
        if (!textStore)
          textStore = "";
        if (![
          ...plugin.storage.userList,
          ...plugin.storage.channelList,
          ...plugin.storage.guildList
        ].includes(textStore)) {
          if (mode != "word")
            textStore = textStore?.toLowerCase()?.trim()?.replace(/\s+/g, "");
          if (textStore != "" && (mode == "user" && (!textStore.startsWith("@") && /^\d+$/.test(textStore) || textStore.startsWith("@") && isValidDiscordUsername(textStore)) || mode != "user" && mode != "word" && /^\d+$/.test(textStore) || mode == "word" && !plugin.storage.wordList.includes(textStore))) {
            plugin.storage[`${mode}List`].push(textStore);
            toasts.showToast("Added Entry", assets.getAssetIDByName("hub-add"));
            showList(mode);
          } else {
            showAddEntry(mode, `${textStore}`);
            toasts.showToast(mode == "word" ? "Entry Already Exists" : "Invalid Entry", assets.getAssetIDByName("ic_warning_24px"));
          }
        } else {
          showAddEntry(mode, `${textStore}`);
          toasts.showToast("Entry Already Exists", assets.getAssetIDByName("ic_warning_24px"));
        }
      } catch (error) {
      }
    },
    children: /* @__PURE__ */ common.React.createElement(ScrollView, {
      style: {
        marginVertical: 8,
        maxHeight: common.ReactNative.Dimensions.get("window").height / 1.372
      }
    }, /* @__PURE__ */ common.React.createElement(FormInput, {
      title: mode == "user" ? mode != "word" ? `Make sure to enter a valid ID or username. Usernames must start with the "@" prefix.` : `Make sure to enter a valid ID.` : `Use newlines by typing "%n%".`,
      placeholder: mode != "word" ? "737372772166008914" : "hewwo :3",
      value: `${textStore}`,
      onChange: function(value) {
        return textStore = `${value}`;
      }
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainerBrand,
      onPress: function() {
        return showList(mode);
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextBrand
    }, "Back")))
  });
}
function showGreylistMenu() {
  alerts.showConfirmationAlert({
    title: plugin.storage.mode ? "Whitelist" : "Blacklist",
    confirmText: "Back",
    onConfirm: function() {
      showSettings();
    },
    children: /* @__PURE__ */ common.React.createElement(ScrollView, {
      style: {
        marginVertical: 8,
        maxHeight: common.ReactNative.Dimensions.get("window").height / 1.3647
      }
    }, /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "Only Apply To Storage",
      subLabel: "While switched on, these filters will only apply when saving the message to storage.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("icon-qs-files")
      }),
      onValueChange: function(v) {
        plugin.storage.onlyStorageBlock = v;
        showGreylistMenu();
      },
      value: plugin.storage.onlyStorageBlock
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "Whitelist Mode",
      subLabel: "While switched on, instead of blacklisting the entries only the entries will be acknowledged.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("ic_close_16px")
      }),
      onValueChange: function(v) {
        plugin.storage.mode = v;
        showGreylistMenu();
      },
      value: plugin.storage.mode
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(FormSwitchRow, {
      label: "Exact Match",
      subLabel: "Make keywords case sensitive.",
      leading: /* @__PURE__ */ common.React.createElement(FormIcon, {
        source: assets.getAssetIDByName("ic_add_text")
      }),
      onValueChange: function(v) {
        plugin.storage.exactMatch = v;
        showGreylistMenu();
      },
      value: plugin.storage.exactMatch
    }), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainer,
      onPress: function() {
        return showList("word");
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonText
    }, "Keywords")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainer,
      onPress: function() {
        return showList("user");
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonText
    }, "Users")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainer,
      onPress: function() {
        return showList("channel");
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonText
    }, "Channels")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainer,
      onPress: function() {
        return showList("guild");
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonText
    }, "Guilds")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainerDanger,
      onPress: function() {
        return alerts.showConfirmationAlert({
          title: "Clear All User Entries",
          content: "Are you sure?",
          confirmText: "Yes",
          confirmColor: "red",
          onConfirm: function() {
            plugin.storage.userList = [];
            showGreylistMenu();
            toasts.showToast("Cleared All User Entries", assets.getAssetIDByName("ic_trash_24px"));
          }
        });
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextDanger
    }, "Clear All User Entries")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainerDanger,
      onPress: function() {
        return alerts.showConfirmationAlert({
          title: "Clear All Channel Entries",
          content: "Are you sure?",
          confirmText: "Yes",
          confirmColor: "red",
          onConfirm: function() {
            plugin.storage.channelList = [];
            showGreylistMenu();
            toasts.showToast("Cleared All Channel Entries", assets.getAssetIDByName("ic_trash_24px"));
          }
        });
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextDanger
    }, "Clear All Channel Entries")), /* @__PURE__ */ common.React.createElement(FormDivider, null), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      style: styles.buttonContainerDanger,
      onPress: function() {
        return alerts.showConfirmationAlert({
          title: "Clear All Guild Entries",
          content: "Are you sure?",
          confirmText: "Yes",
          confirmColor: "red",
          onConfirm: function() {
            plugin.storage.guildList = [];
            showGreylistMenu();
            toasts.showToast("Cleared All Guild Entries", assets.getAssetIDByName("ic_trash_24px"));
          }
        });
      }
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.buttonTextDanger
    }, "Clear All Guild Entries")))
  });
}
function showEntryAction(mode, content) {
  showSimpleActionSheet({
    key: "CardOverflow",
    header: {
      title: `${content}`
    },
    options: [
      {
        label: "Copy to Clipboard",
        onPress: function() {
          common.clipboard.setString(`${content}`);
          toasts.showToast("Copied to clipboard", assets.getAssetIDByName("toast_copy_message"));
        }
      },
      {
        isDestructive: true,
        label: "Delete Entry",
        onPress: function() {
          if (mode == "user")
            plugin.storage.userList = plugin.storage.userList.filter(function(item) {
              return item !== content;
            });
          if (mode == "guild")
            plugin.storage.guildList = plugin.storage.guildList.filter(function(item) {
              return item !== content;
            });
          if (mode == "channel")
            plugin.storage.channelList = plugin.storage.channelList.filter(function(item) {
              return item !== content;
            });
          if (mode == "word")
            plugin.storage.wordList = plugin.storage.wordList.filter(function(item) {
              return item !== content;
            });
          showList(mode);
          toasts.showToast("Deleted Entry", assets.getAssetIDByName("ic_trash_24px"));
        }
      }
    ]
  });
}
function showMessageAction(message, markdownAhh, embedString) {
  showSimpleActionSheet({
    key: "CardOverflow",
    header: {
      title: `@${message?.author.globalName || message?.author.username}: ${markdownAhh.length > 32 ? markdownAhh.slice(0, 32).replace(/\n/g, " ") + "..." : markdownAhh.replace(/\n/g, " ")}`,
      onClose: function() {
        return hideActionSheet();
      }
    },
    options: [
      {
        isDestructive: true,
        label: "Edit Raw (Risky)",
        onPress: function() {
          modals.pushModal({
            key: "file-content-preview",
            modal: {
              key: "file-content-preview",
              modal: createEditModal(message.content && message.content !== "" ? message.content.replace(/\n/g, " ") : "[Attachment(s)]", JSON.stringify(message, null, "	"), `@${message?.author?.username}`, function(textStore) {
                try {
                  addMessage(message.notdeleted ? "edit" : "delete", JSON.parse(textStore));
                  toasts.showToast("Pushed Edit", assets.getAssetIDByName("ic_edit_24px"));
                  modals.popModal("file-content-preview");
                } catch (error) {
                  toasts.showToast("Make sure the JSON is valid", assets.getAssetIDByName("ic_warning_24px"));
                }
              }),
              animation: "slide-up",
              shouldPersistUnderModals: false,
              closable: true
            }
          });
        }
      },
      {
        label: "Copy Text",
        onPress: function() {
          common.clipboard.setString(`${(message?.content + (message.attachments.length > 0 ? "\n" + message.attachments.map(function(item) {
            return typeof item === "string" ? item : item.url;
          }).join("\n\n") : "") + embedString).replace(/^\n+/, "").replace(/\n+$/, "")}`);
          toasts.showToast("Copied Raw Message Content", assets.getAssetIDByName("toast_copy_message"));
        }
      },
      {
        label: "Copy Text Without Markdown",
        onPress: function() {
          common.clipboard.setString(`${markdownAhh}`);
          toasts.showToast("Copied Message Content", assets.getAssetIDByName("toast_copy_message"));
        }
      },
      {
        isDestructive: true,
        label: "Delete Message Log",
        onPress: function() {
          removeMessage(message.notdeleted ? "edit" : "delete", message.id);
          toasts.showToast("Deleted Message Log", assets.getAssetIDByName("ic_trash_24px"));
        }
      },
      {
        label: "Open Profile",
        onPress: function() {
          common.url.openURL(`https://discordapp.com/users/${message?.author?.id}`);
        }
      },
      {
        label: "Copy User ID",
        onPress: function() {
          common.clipboard.setString(`${message?.author?.id}`);
          toasts.showToast("Copied User ID", assets.getAssetIDByName("toast_copy_message"));
        }
      },
      {
        label: "Go to Message",
        onPress: function() {
          common.url.openURL(`https://discord.com/channels/${!message.guild_id || message.guild_id == "null" ? "@me" : message?.guild_id}/${message?.channel_id}/${message?.id}`);
        }
      },
      {
        label: "Copy Message Link",
        onPress: function() {
          common.clipboard.setString(`https://discord.com/channels/${!message.guild_id || message.guild_id == "null" ? "@me" : message?.guild_id}/${message?.channel_id}/${message?.id}`);
          toasts.showToast("Copied Message Link", assets.getAssetIDByName("toast_copy_message"));
        }
      }
    ]
  });
}
function Settings() {
  storage.useProxy(plugin.storage);
  try {
    const maxItems = 24;
    const scrollViewRef = useRef();
    const [byOldest, setByOldest] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    let joinedLogs = [];
    let queryTimeout;
    try {
      let editedLogs = new Map(JSON.parse(pako.inflate(Buffer.from(plugin.storage.edited || "", "base64"), {
        to: "string"
      })));
      if (plugin.storage.saveEdit) {
        for (const object of editedLogs.values()) {
          object.notdeleted = true;
        }
        joinedLogs.push(...editedLogs.values());
      }
    } catch (error) {
    }
    try {
      let deletedLogs = new Map(JSON.parse(pako.inflate(Buffer.from(plugin.storage.deleted || "", "base64"), {
        to: "string"
      })));
      joinedLogs.push(...deletedLogs.values());
    } catch (error) {
    }
    try {
      if (query.replace(/\s/g, "") != "") {
        joinedLogs = searchMessages(joinedLogs, query);
      }
      joinedLogs = lodashExports._.orderBy(joinedLogs.filter(function(object) {
        return object != null;
      }), function(object) {
        return parseInt(object.dateofaction);
      }, [
        "desc"
      ]);
    } catch (error) {
      joinedLogs = [];
      logStuff$1(error);
    }
    const totalLength = joinedLogs.length;
    const totalPages = Math.ceil(totalLength / maxItems);
    if (page > totalPages && totalPages > 0)
      setPage(1);
    let paginatedLogs = lodashExports._.slice(joinedLogs, (page - 1) * maxItems, page * maxItems);
    try {
      paginatedLogs = paginatedLogs.map(function(object) {
        for (const key in object) {
          if (object.hasOwnProperty(key) && object[key] === "null") {
            object[key] = null;
          }
          if (key === "content" && typeof object[key] === "string") {
            object[key] = object[key].replace(/85549acb9dc8443d8f5a88dc23d6f155/g, "\uFF3D").trimStart().replace(/^\u200c/, "");
          }
        }
        return object;
      });
    } catch (error) {
    }
    const navigation = common.NavigationNative.useNavigation();
    navigation.addListener("focus", function() {
      navigation.setOptions({
        title: "Message Logger",
        headerRight: function() {
          return /* @__PURE__ */ common.React.createElement(View$1, {
            style: {
              flexDirection: "row"
            }
          }, /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
            onPress: function() {
              return setPage(totalPages + 1);
            }
          }, /* @__PURE__ */ common.React.createElement(Image, {
            style: styles.headerStyleIcon,
            source: assets.getAssetIDByName("ic_sync_24px")
          })), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
            onPress: function() {
              return showSettings();
            }
          }, /* @__PURE__ */ common.React.createElement(Image, {
            style: styles.headerStyleIcon,
            source: assets.getAssetIDByName("ic_settings")
          })));
        }
      });
    });
    return /* @__PURE__ */ common.React.createElement(View$1, {
      style: styles.container
    }, /* @__PURE__ */ common.React.createElement(ScrollView, {
      ref: scrollViewRef,
      style: styles.container
    }, /* @__PURE__ */ common.React.createElement(components.Search, {
      style: {
        margin: 8
      },
      onChangeText: function(x) {
        clearTimeout(queryTimeout);
        queryTimeout = setTimeout(function() {
          setQuery(x?.normalize("NFKC")?.toLowerCase());
        }, 500);
      }
    }), joinedLogs.length > 0 ? /* @__PURE__ */ common.React.createElement(FlatList, {
      data: paginatedLogs,
      keyExtractor: function(item) {
        return item.id.toString();
      },
      renderItem: function(param) {
        let { item, index } = param;
        let title;
        if (item.guild_id) {
          title = index === 0 || paginatedLogs[index - 1].guild_id != item.guild_id ? `${getGuildName(item.guild_id) || `Guild ID: ${item.guild_id}`}` : null;
        } else {
          title = index === 0 || paginatedLogs[index - 1].channel_id != item.channel_id ? `DM Channel: ${item.channel_id}` : null;
        }
        const chatComponent = /* @__PURE__ */ common.React.createElement(Chat, {
          message: item,
          onPress: function(markdownAhh, embedString) {
            showMessageAction(item, markdownAhh, embedString);
          },
          onLongPress: function(markdownAhh, embedString) {
            alerts.showConfirmationAlert({
              title: "Message",
              content: convertTimestamps(`${(item?.content + (item.attachments.length > 0 ? "\n" + item.attachments.map(function(obj) {
                return typeof obj === "string" ? obj : obj.url;
              }).join("\n\n") : "") + embedString).replace(/^\n+/, "").replace(/\n+$/, "")}`),
              onConfirm: function() {
                return void 0;
              }
            });
          }
        });
        return title ? /* @__PURE__ */ common.React.createElement(FormSection, {
          title
        }, chatComponent) : chatComponent;
      }
    }) : /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.nothingText
    }, "No logged messages \xAF\\_(\u30C4)_/\xAF")), /* @__PURE__ */ common.React.createElement(View$1, {
      style: styles.pageSwitcher
    }, /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      onPress: function() {
        if (page > 1) {
          setPage(page - 1);
          scrollViewRef.current.scrollTo({
            y: 0,
            animated: false
          });
        }
      },
      disabled: page == 1
    }, /* @__PURE__ */ common.React.createElement(Image, {
      source: assets.getAssetIDByName("ic_arrow_back_24px"),
      style: [
        styles.switcherImage,
        {
          opacity: page == 1 ? 0.35 : 1
        }
      ]
    })), /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.switcherText
    }, "Page ", page, " of ", totalPages, " | ", totalLength, " Results"), /* @__PURE__ */ common.React.createElement(TextInput, {
      style: {
        position: "absolute",
        bottom: 0,
        left: "10%",
        width: "80%",
        height: 40,
        opacity: 0,
        paddingLeft: 10
      },
      keyboardType: "numeric",
      defaultValue: "",
      value: "",
      onChangeText: function(number) {
        if (!(number == "" || number > totalPages || number < 1 || !/^\d+$/.test(number))) {
          setPage(parseInt(number, 10));
          scrollViewRef.current.scrollTo({
            y: 0,
            animated: false
          });
        }
      }
    }), /* @__PURE__ */ common.React.createElement(TouchableOpacity, {
      onPress: function() {
        if (page < totalPages) {
          setPage(page + 1);
          scrollViewRef.current.scrollTo({
            y: 0,
            animated: false
          });
        }
      },
      disabled: page == totalPages
    }, /* @__PURE__ */ common.React.createElement(Image, {
      source: assets.getAssetIDByName("ic_arrow_forward_24px"),
      style: [
        styles.switcherImage,
        {
          opacity: page == totalPages ? 0.35 : 1
        }
      ]
    }))));
  } catch (error) {
    return /* @__PURE__ */ common.React.createElement(View$1, {
      style: styles.nothingContainer
    }, /* @__PURE__ */ common.React.createElement(Text$1, {
      style: styles.nothingText
    }, "Error :("));
  }
}const ThemeStore = metro.findByStoreName("ThemeStore");
const colors = metro.findByProps("colors", "meta");
metro.findByProps("triggerHaptic");
const { TextStyleSheet } = metro.findByProps("TextStyleSheet");
const { View, Text, Pressable } = components.General;
metro.findByProps("TableRow");
metro.findByProps("ActionSheet")?.ActionSheet ?? metro.find(function(x) {
  return x.render?.name === "ActionSheet";
});
metro.findByProps("openLazy", "hideActionSheet");
metro.findByProps("ActionSheetTitleHeader", "ActionSheetCloseButton", "ActionSheetContentContainer");
metro.findByProps("ActionSheetRow")?.ActionSheetRow;
metro.findByName("Navigator") ?? metro.findByProps("Navigator")?.Navigator;
metro.findByProps("getRenderCloseButton")?.getRenderCloseButton ?? metro.findByProps("getHeaderCloseButton")?.getHeaderCloseButton;
metro.findByProps("popModal", "pushModal");
const BaseSearch = metro.findByProps("useSearchControls");
const SettingSearch = metro.findByProps("useSettingSearchQuery");
const SettingSearchBar = metro.findByName("SettingSearchBar");
metro.findByProps("SvgXml");
metro.findByProps("useInMainTabsExperiment", "isInMainTabsExperiment");
metro.find(function(x) {
  return x?.WebView && !x.default;
}).WebView;
function resolveSemanticColor(color) {
  return colors.meta.resolveSemanticColor(ThemeStore.theme, color);
}
const useAdvancedSearch = function(searchContext) {
  const query = SettingSearch.useSettingSearchQuery();
  const controls = BaseSearch.useSearchControls(searchContext, false, function() {
    return void 0;
  });
  common.React.useEffect(function() {
    return function() {
      SettingSearch.setSettingSearchQuery("");
      SettingSearch.setIsSettingSearchActive(false);
    };
  }, []);
  return [
    query,
    controls
  ];
};
const _AdvancedSearch = function(param) {
  let { searchContext, controls } = param;
  return /* @__PURE__ */ common.React.createElement(common.ReactNative.ScrollView, {
    scrollEnabled: false
  }, /* @__PURE__ */ common.React.createElement(BaseSearch.default, {
    searchContext,
    controls
  }, /* @__PURE__ */ common.React.createElement(SettingSearchBar, null)));
};
Object.assign(_AdvancedSearch, {
  useAdvancedSearch
});
var RichText;
(function(RichText2) {
  function Bold(param) {
    let { children, onPress } = param;
    return /* @__PURE__ */ common.React.createElement(SimpleText, {
      variant: "text-md/bold",
      onPress
    }, children);
  }
  RichText2.Bold = Bold;
  function Underline(param) {
    let { children, onPress } = param;
    return /* @__PURE__ */ common.React.createElement(Text, {
      style: {
        textDecorationLine: "underline"
      },
      onPress
    }, children);
  }
  RichText2.Underline = Underline;
})(RichText || (RichText = {}));
function SimpleText(param) {
  let { variant, lineClamp, color, align, style, onPress, getChildren, children, liveUpdate } = param;
  const [_, forceUpdate] = common.React.useReducer(function(x) {
    return ~x;
  }, 0);
  common.React.useEffect(function() {
    if (!liveUpdate)
      return;
    const nextSecond = new Date().setMilliseconds(1e3);
    let interval, timeout;
    timeout = setTimeout(function() {
      forceUpdate();
      interval = setInterval(forceUpdate, 1e3);
    }, nextSecond - Date.now());
    return function() {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);
  return /* @__PURE__ */ common.React.createElement(Text, {
    style: [
      variant ? TextStyleSheet[variant] : {},
      color ? {
        color: resolveSemanticColor(ui.semanticColors[color])
      } : {},
      align ? {
        textAlign: align
      } : {},
      style ?? {}
    ],
    numberOfLines: lineClamp,
    onPress
  }, getChildren?.() ?? children);
}const { FormRow } = components.Forms;
function SettingsSection(param) {
  const navigation = common.NavigationNative.useNavigation();
  return /* @__PURE__ */ React.createElement(components.ErrorBoundary, null, /* @__PURE__ */ React.createElement(FormRow, {
    label: /* @__PURE__ */ React.createElement(SimpleText, {
      variant: "text-md/semibold",
      color: "HEADER_PRIMARY"
    }, "Message Logger"),
    leading: /* @__PURE__ */ React.createElement(FormRow.Icon, {
      source: assets.getAssetIDByName("ic_audit_log_24px")
    }),
    trailing: FormRow.Arrow,
    onPress: function() {
      return navigation.push("VendettaCustomPage", {
        render: Settings
      });
    }
  }));
}let patches = [];
var index = {
  onLoad: function() {
    patches.push(patchSettingsPin(function() {
      return true;
    }, function() {
      return /* @__PURE__ */ React.createElement(SettingsSection, null);
    }, {
      key: _vendetta.plugin.manifest.name,
      icon: assets.getAssetIDByName("ic_audit_log_24px"),
      title: function() {
        return "Message Logger";
      },
      page: {
        render: Settings
      }
    }));
    patches.push(patchLogging());
    patches.push(patchRow());
    patches.push(patchSheet());
    patches.push(patchUserSheet());
    patches.push(patchInput());
    patches.push(patchCopy());
  },
  onUnload: function() {
    for (const unpatch of patches) {
      unpatch();
    }
  }
};exports.default=index;Object.defineProperty(exports,'__esModule',{value:true});return exports;})({},vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.plugin,vendetta.ui.toasts,vendetta,vendetta.ui.alerts,vendetta.ui.assets,vendetta.utils,vendetta.ui,vendetta.ui.components,vendetta.storage);